import React, { Component } from 'react';
import propTypes from 'prop-types';


export class TodoItems extends Component {
  cssStyle =()=>{
     return {textDecoration:this.props.todo.completed ? "line-through" : ''}
  }

 
  render() {

    const {title, id}=this.props.todo;
    return (

     <div className="eachItem" style={this.cssStyle()}>
      <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {" "}
        
        {title}

        <button style={{ float: "right",
         padding: "5px 10px",
            background: " rgb(5, 80, 57)", 
          borderRadius:"20%", 
          fontWeight:"bold",
            cursor: "pointer",
            outline:"none",
            border:"none",
            fontSize:"15px",
            textAlign:"center"
          }} onClick={this.props.deleteItem.bind(this, id)}>
            x</button>
        </p>
      </div>
    )
  }
}
TodoItems.propTypes = {
  todo: propTypes.object.isRequired
}
export default TodoItems
