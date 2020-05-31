import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Row, Col } from "antd";
import Seo from "../common/Seo";
import axios from "axios";
import { endpoint } from "../common/constants/endpoint";
import { searching, savePosts } from "../reducers/actions/commonActions";
import Posts from "./Posts";

const Home = (props) => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState(props.searchValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const onChange = (event) => {
    const val = event.target.value;

    setSearch(val);
    props.dispatch(searching(val));
  };

  const getList = async () => {
    /** Either posts already exists in redux, we don't need request  */
    if (props.posts) {
      setList(props.posts);
      return;
    }

    setLoading(true);
    const { data } = await axios.get(endpoint + "users");
    await axios
      .get(endpoint + "posts")
      .then((result) => {
        if (result.status === 200) {
          const posts = result.data.map((post) => {
            post.user = data.find((u) => u.id === post.userId);
            return post;
          });
          setList(posts);
          props.dispatch(savePosts(posts));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="home">
      <Seo title="Home" />
      <Row>
        <Col span={8} offset={8}>
          <Input.Search
            allowClear={true}
            defaultValue={props.searchValue}
            onChange={onChange}
            placeholder="Input search text"
            loading={loading}
          />
        </Col>
      </Row>

      <Posts list={list} search={search} loading={loading} />
    </div>
  );
};

const mapStateToProps = (appState) => ({
  searchValue: appState.common.search,
  posts: appState.common.posts,
});
export default withRouter(connect(mapStateToProps)(Home));
