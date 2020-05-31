import React, { useState } from "react";
import "./App.scss";
import PoorlyWrittenTodoList from "./PoorlyWrittenTodoList";

function App() {
  const [todos, setTodos] = useState(null);

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
