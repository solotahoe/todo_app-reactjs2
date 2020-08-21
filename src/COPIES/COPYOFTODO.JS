import React from 'react';
import './App.css';
import TodoItems from './TodoItems';
import propTypes from 'prop-types';

class Todos extends React.Component {

    render() {
        //console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <TodoItems todoItem={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}
Todos.protoTypes = {
    todoItem: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
};

export default Todos;
