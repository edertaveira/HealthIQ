import React, { useState } from "react";
import "./App.scss";
import PoorlyWrittenTodoList from "./PoorlyWrittenTodoList";

function App() {
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
}

export default App;
