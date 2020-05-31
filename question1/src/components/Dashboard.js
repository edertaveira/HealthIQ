import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Input, Row, Col } from "antd";
import Seo from "../common/Seo";
import axios from "axios";
import { endpoint } from "../common/constants/endpoint";
import { searching } from "../reducers/actions/commonActions";
import Cards from "./Cards";

const limit = 20;
const Dashboard = (props) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, [props.searchValue]);

  const onSearch = (value) => {
    if (value === "") return;
    setList([]);
    setPage(1);
    setHasMore(true);
    props.dispatch(searching(value));
  };

  const onChange = (event) => {
    if (event.target.value === "") onSearch(null);
  };

  const getList = async () => {
    setLoading(true);
    const filter = props.searchValue ? { nameStartsWith: props.searchValue } : {};
    const params = { ...axios.defaults.params, ...filter, offset: (page - 1) * limit };

    return await axios
      .get(endpoint + "characters", { params })
      .then((result) => {
        const res = result.data;
        if (res.code === 200) {
          setList(list.concat(res.data.results));
          setTotal(res.data.total);
          setPage(page + 1);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="dashboard">
      <Seo title="Dashboard" />
      <Row>
        <Col span={8} offset={8}>
          <Input.Search
            allowClear={true}
            defaultValue={props.searchValue}
            onChange={onChange}
            placeholder="Input search text"
            onSearch={onSearch}
            loading={loading}
          />
        </Col>
      </Row>

      <Cards list={list} total={total} loading={loading} hasMore={hasMore} setHasMore={setHasMore} getList={getList} />
    </div>
  );
};

const mapStateToProps = (appState) => ({
  searchValue: appState.common.search,
});
export default withRouter(connect(mapStateToProps)(Dashboard));
