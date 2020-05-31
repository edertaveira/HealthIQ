import React, { useState } from "react";
import "./App.scss";
import PoorlyWrittenTodoList from "./PoorlyWrittenTodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Todo 1",
      isHighlighted: true,
      isActive: true,
      items: ["To Finish this challenge", "To Test The app"],
    },
    {
      id: 2,
      name: "Todo 2",
      isHighlighted: true,
      isActive: true,
      items: ["Finish this challenge"],
    },
  ]);

  const onHighlight = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isHighlighted = !todo.isHighlighted;
        return todo;
      })
    );
  };

  return <PoorlyWrittenTodoList onHighlight={onHighlight} todos={todos} />;
}

export default App;
