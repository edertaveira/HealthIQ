import React, { useState } from "react";
import PoorlyWrittenTodoList from "./PoorlyWrittenTodoList";
import { withRouter } from "react-router-dom";

const PoorlyWritten = (props) => {
  const [todos] = useState([
    {
      isHighlighted: true,
      isActive: true,
      items: ["Finish this challenge"],
    },
    {
      isHighlighted: true,
      isActive: true,
      items: ["Finish this challenge"],
    },
    {
      isHighlighted: true,
      isActive: true,
      items: ["Finish this challenge"],
    },
  ]);

  const onHighlight = (idx) => {
    console.log(idx);
  };

  return <PoorlyWrittenTodoList onHighlight={onHighlight} todos={todos} />;
};

export default withRouter(PoorlyWritten);
