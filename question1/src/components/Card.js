import React from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import { Card as CardAnt } from "antd";

const Card = (props) => {
  const { item } = props;
  return (
    <Link id={`card_${item.id}`} to={`/card/${item.id}`}>
      <CardAnt
        bordered={false}
        hoverable
        cover={
          <div className="container-cover">
            <img alt={item.name} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
          </div>
        }
      >
        <CardAnt.Meta
          title={
            props.searchValue ? (
              <Highlighter
                highlightClassName="highlight"
                searchWords={[props.searchValue]}
                autoEscape={true}
                textToHighlight={item.name}
              />
            ) : (
              item.name
            )
          }
        />
      </CardAnt>
    </Link>
  );
};

export default Card;
