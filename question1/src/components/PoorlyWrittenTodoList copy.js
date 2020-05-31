import React, { Component } from "react";
import PropTypes from "prop-types";

class PoorlyWrittenTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTodos: []
    };
  }

  componentDidMount() {
    const { todos } = this.props;
    this.setState({ activeTodos: todos.filter((t) => t.isActive) });
  }

  render() {
    const { activeTodos } = this.state;

    return (
      <div>
        {activeTodos.map((t, idx) => (
          <div>
            <h1>To Do List</h1>
            <ul>
              {t.items.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
            <button
              onClick={() => {
                const h = this.state.highlightedItems;
                h[idx] = !h[idx];
                this.setState({
                  highlightedItems: h,
                });
                onHighlight(idx);
              }}
            >
              {this.state.highlightedItems[idx] ? "Unhighlight" : "Highlight"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
PoorlyWrittenTodoList.defaultProps = {
  todos: [],
};
PoorlyWrittenTodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onHighlight: PropTypes.func.isRequired,
};
export default PoorlyWrittenTodoList;
