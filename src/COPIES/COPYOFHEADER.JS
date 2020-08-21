import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header style={HeaderStyle}>
                <h1>TodoLiST</h1>
                <Link style={HeaderStyle} to="/">
                    Home
          </Link>{" "}
          |{" "}
                <Link style={HeaderStyle} to="/about">
                    About
          </Link>
            </header>
        </div>
    );


}
const HeaderStyle = {
    background: "#333",
    color: '#fff',
    textAlign: "center",
    padding: "10px"
}