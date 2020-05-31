import React, { useEffect, useState } from "react";
import { List } from "antd";
import Highlighter from "react-highlight-words";
import PropTypes from "prop-types";

function Posts({ list, loading, search }) {
  const [posts, setPosts] = useState(list);

  useEffect(() => {
    if (search && search !== "") {
      const found = list.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.body.toLowerCase().includes(search.toLowerCase())
      );
      setPosts(found);
    } else {
      setPosts(list);
    }
  }, [search, list]);

  const highlight = (text) => {
    return (
      <Highlighter highlightClassName="highlight" searchWords={[search]} autoEscape={true} textToHighlight={text} />
    );
  };

  return (
    <List
      itemLayout="vertical"
      data-testid="list"
      size="small"
      loading={loading}
      pagination={{
        pageSize: 10,
        size: "small",
        position: "both",
      }}
      dataSource={posts}
      footer={<div>{posts && posts.length} Posts.</div>}
      renderItem={(item) => (
        <List.Item key={item.title} actions={[]}>
          <List.Item.Meta
            title={highlight(item.title)}
            description={`${item.user.name} (${item.user.username}) - ${item.user.address.city}`}
          />
          {highlight(item.body)}
        </List.Item>
      )}
    />
  );
}

Posts.propTypes = {
  list: PropTypes.array.isRequired,
  search: PropTypes.string,
  loading: PropTypes.bool,
};

Posts.defaultProps = {
  search: "",
  loading: false,
};

export default Posts;
