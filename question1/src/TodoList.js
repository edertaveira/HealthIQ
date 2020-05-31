import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todos, onHighlight }) => {
  return (
    <div>
      <h1>To Do List</h1>
      {todos &&
        todos
          .filter((t) => t.isActive)
          .map((t, idx) => (
            <div key={idx}>
              <h1>{t.name}</h1>
              <ul>{t.items && t.items.map((i) => <li key={i}>{i}</li>)}</ul>
              <button onClick={() => onHighlight(t.id)}>{t.isHighlighted ? "Unhighlight" : "Highlight"}</button>
            </div>
          ))}
    </div>
  );
};
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onHighlight: PropTypes.func.isRequired,
};
export default TodoList;
