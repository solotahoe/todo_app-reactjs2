import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>TodoList</h1>
        <h3 className="links"> <Link style={{ color: "white", textDecoration: "none" }} to="./">Home </Link> {"  "}| {"  "} <Link style={{color:"white", textDecoration:"none"}} to="./about">About</Link></h3> 
      </div>
    )
  }
}

export default Header
