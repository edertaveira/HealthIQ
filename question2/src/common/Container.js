import React from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";

const { Content } = Layout;

const Container = (props) => {
  const { AsyncFunc } = props;
  return (
    <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <AsyncFunc />
      </div>
    </Content>
  );
};
export default withRouter(Container);
