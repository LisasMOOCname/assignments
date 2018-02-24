import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/services">Services</Link>
        </nav> 
    )
}

export default Navbar;


