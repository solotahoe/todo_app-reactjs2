import React from 'react';
import Header from './Header';
import './App.css'
import Buttons from './Buttons';
import Todos from './Todo';
import { v4 as uuidv4 } from 'uuid';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './About';
import TodoItems from './TodoItems';
import Blank from './Blank';
import Experi from './Experi';


class App extends React.Component {
  state={todos:[
    // {
    //   id: uuidv4(),
    //   title: "cook with bae",
    //   completed: false
    // },
    // {
    //   id: uuidv4(),
    //   title: "wash clothes",
    //   completed: false
    // },
    // {
    //   id: uuidv4(),
    //   title: "leant react on youtube",
    //   completed: false
    // },
    // {
    //   id: uuidv4(),
    //   title: "visit the park",
    //   completed: false
    // }
  ]
    
  }
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })})
    
  }
  deleteItem=(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo =>  todo.id !== id)]})
  }
  addTodoItem=(title)=>{
    if(title===""){
      return;
    }else{
      const newTodo = { id: uuidv4(), title: title, completed: false }
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
   
  }
 
//!important to use multi cursor use alt and then click on  the two elements you want to change 

//this is a lifecylcle method //another lifecycle method is componentDidMount that runs when page first runs
  

render() {

  
  
    return (
      <Router> 
      <div className="App">
        <Header />
       
          
          <Route path="/" exact render={(props) => (
            <React.Fragment>
              <Buttons addTodoItem={this.addTodoItem}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
              {this.state.todos.length === 0 && <Blank />}
            </React.Fragment>
          )}   /> 

          <Route path="/about" exact component={About}/>
       
          
        </div>
      </Router>
     
    );
  }
}

export default App;
