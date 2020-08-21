import React, { Component } from 'react';

export class Buttons extends React.Component {


    state={
        title:""
    }

//set the onchange state of the input element // use the e.target.name to set the value note:e.targe.{ name} must correspond with the state
    onChange =(e)=>{
        this.setState({[e.target.name] :e.target.value});
    }

// use props to pass the function to the main app.js where the initial state of the app is
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodoItem(this.state.title)
        
        this.setState({title:""})
    }
    render() {
        return (

            <form className="form" onSubmit={this.onSubmit}>
                <input type="text" className="input" placeholder="add todos....." name="title" value={this.state.title} onChange={this.onChange}/>
                <button className="buttons" >submit</button>

            </form>
        )
    }
}

export default Buttons;
