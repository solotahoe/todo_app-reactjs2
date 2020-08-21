import React, { Component } from 'react'
import propTypes from 'prop-types';

export class TodoItems extends React.Component {
    getStyle = () => {
        return {
            background: 'rgb(171, 235, 229)',
            padding: "10px",
            borderBottom: '1px black dotted',
            textDecoration: this.props.todoItem.complete ? "line-through" : "none"
        };
    }


    render() {
        const { id, title } = this.props.todoItem;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}
                    />{" "}
                    {""} {title}
                    <button
                        style={btnStyle}
                        onClick={this.props.delTodo.bind(this, id)}
                    >
                        x
                   </button>
                </p>
            </div>
        );
    }
}

TodoItems.protoTypes = {
    todos: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
};
const btnStyle = {
    background: "#ff0000",
    color: '#fff',
    border: 'none',
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    outline: "none"
}

export default TodoItems
//shortcut to generate this class component is rce