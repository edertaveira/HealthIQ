import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spin, message, Card, Col, Row, List, Divider, Typography, PageHeader, Tabs, Affix } from "antd";
import Seo from "../common/Seo";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { endpoint } from "../common/constants/endpoint";

const Details = (props) => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCard();
  }, []);

  const getCard = async () => {
    const id = props.match.params.id;

    setLoading(true);
    return await axios
      .get(endpoint + "characters/" + id)
      .then((result) => {
        const res = result.data;
        if (res.code === 200) {
          setCard(res.data.results[0]);
        } else {
          message.error(res.data.status);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <div>
      <Seo title={`${card ? card.name : "Details Page"}`} />
      <Spin style={{ color: "#FFFFFF" }} indicator={<LoadingOutlined />} spinning={loading}>
        <PageHeader onBack={() => window.history.back()} className="site-page-header" title={card && card.name} />
        {card && (
          <Row gutter={16} className="container-internal">
            <Col lg={8}>
              <Affix offsetTop={10}>
                <Card
                  bordered={false}
                  hoverable
                  cover={
                    <div className="container-cover">
                      <img alt={card.name} src={`${card.thumbnail.path}.${card.thumbnail.extension}`} />
                    </div>
                  }
                >
                  <Card.Meta title={card.name} />
                </Card>
              </Affix>
            </Col>
            <Col lg={16}>
              {card.description && (
                <React.Fragment>
                  <Divider orientation="left">Description</Divider>
                  <Typography.Text>{card.description}</Typography.Text>
                </React.Fragment>
              )}

              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={`Series (${card.series.returned})`} key="1">
                  <List
                    dataSource={card.series.items}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography.Text>{item.name}</Typography.Text>
                      </List.Item>
                    )}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab={`Stories (${card.stories.returned})`} key="2">
                  <List
                    dataSource={card.stories.items}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography.Text>{item.name}</Typography.Text>
                        <Typography.Text>Type: {item.type}</Typography.Text>
                      </List.Item>
                    )}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab={`Comics (${card.comics.returned})`} key="3">
                  <List
                    dataSource={card.comics.items}
                    renderItem={(item) => (
                      <List.Item>
                        <Typography.Text>{item.name}</Typography.Text>
                      </List.Item>
                    )}
                  />
                </Tabs.TabPane>
              </Tabs>
            </Col>
          </Row>
        )}
      </Spin>
    </div>
  );
};

export default withRouter(Details);
