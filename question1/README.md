# Question 1

Identify the issues with the following code snippet and write a better version of it.

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
​
class PoorlyWrittenTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedItems: props.todos.map(t => t.isHighlighted)
    };
  }
  render() {
    const { todos, onHighlight } = this.props;
    const activeTodos = todos.filter(t => t.isActive);
​
    return (
      <div>
        { activeTodos.map((t, idx) => (
          <div>
            <h1>To Do List</h1>
            <ul>
              { t.items.map(i => (
                <li>
                  { i }
                </li>
              )) }
            </ul>
            <button onClick={() => {
              const h = this.state.highlightedItems;
              h[idx] = !h[idx];
              this.setState({
                highlightedItems: h
              });
              onHighlight(idx);
            }}>
              { this.state.highlightedItems[idx] ? 'Unhighlight' : 'Highlight' }
            </button>
          </div>
        )) }
      </div>
    );
  }
}
PoorlyWrittenTodoList.propTypes = {
  todos: PropTypes.array,
  onHighlight: PropTypes.func
};
export default PoorlyWrittenTodoList;
```

## Answer

### Code
```
import React from "react";
import PropTypes from "prop-types";

const PoorlyWrittenTodoList = ({ todos, onHighlight }) => {
  return (
    <div>
      <h1>To Do List</h1>
      {todos &&
        todos
          .filter((t) => t.isActive)
          .map((t, idx) => (
            <div key={idx}>
              <h1>{t.name}</h1>
              <ul>
                {t.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <button onClick={() => onHighlight(t.id)}>{t.isHighlighted ? "Unhighlight" : "Highlight"}</button>
            </div>
          ))}
    </div>
  );
};
PoorlyWrittenTodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onHighlight: PropTypes.func.isRequired,
};
export default PoorlyWrittenTodoList;
```

### Explaning

- Transform in a React function to improve the tests and unifying the information;
- Removing "To-Do List" repetition and putting a name in each todo-list to identify each one;
- Check if a todo-list is a highlight from the field "t.isHighlighted" and not from a state list created;
- Adding the Bussines logical of Highlight in the parent of the component (App.js);

```
const onHighlight = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isHighlighted = !todo.isHighlighted;
        return todo;
      })
    );
  };
```

- Checking the "todos" and "t.items" before filter and map to avoid an error like `TypeError: Cannot read property 'filter/map' of null`;
- Proptypes as required

```
PoorlyWrittenTodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onHighlight: PropTypes.func.isRequired,
};
```




## Autor

- **Eder Taveira** - [edertaveira](https://github.com/edertaveira)

## Licence

This project is powered by [Health IQ](https://healthiq.com)
