import React from 'react';
import './App.css';
import Todo from './Todo';
import Header from './Header';
import AddTodo from './addTodo';
// import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import about from './About';
import About from './About';
import axios from 'axios';

class App extends React.Component {
    state = {
        todos: [],
    };
    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => {
                console.log(res.data);
                this.setState({ todos: res.data });
            });
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.complete = !todo.complete;
                }
                return todo;
            }),
        });
    };

    //delete a todo item

    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => {
                this.setState({ todos: [...this.state.todos, res.data] });
            })
        //console.log(id);
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        });
    };
    AddTodo = (title) => {
        try {
            axios.post("https://jsonplaceholder.typicode.com/todos", {
                title: title,
                complete: false
            }).then((res) => {
                this.setState({ todos: [...this.state.todos, res.data] });
            })
        } catch (error) {
            console.log(error);
        }

    };

    render() {
        //console.log(this.state.todos)
        return (
            <Router>
                <div>
                    <div className="container">
                        <Header />
                        <Route
                            path="/"
                            exact
                            render={(props) => (
                                <React.Fragment>
                                    <AddTodo AddTodo={this.AddTodo} />
                                    <Todo
                                        todos={this.state.todos}
                                        markComplete={this.markComplete}
                                        delTodo={this.delTodo}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
