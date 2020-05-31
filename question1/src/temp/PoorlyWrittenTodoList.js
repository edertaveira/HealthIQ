import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
