import React, { Component } from 'react'
import TodoItems from './TodoItems';
import propTypes from 'prop-types';

export class Todo extends Component {

    
    render() {
       
        return (
            <div className="todoItems">
            
            {this.props.todos.map((todo)=>(
                <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem}/>
            ))}
            </div>
        )
    }
}
const prototype = Todo.propTypes = {
    todos: propTypes.array.isRequired
};
export default Todo

