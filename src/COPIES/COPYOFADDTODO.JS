import React, { Component } from 'react';
import propTypes from "prop-types";

export class AddTodo extends React.Component {
    state = {
        title: "",

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: "" });
    }
    render() {
        return (
            <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="add to do..."
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: "1" }}
                />

            </form>
        )
    }

}
AddTodo.protoTypes = {
    AddTodo: propTypes.func.isRequired,

};

export default AddTodo
