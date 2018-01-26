import React, {Component} from "react";
import NavBar from "./NavBar";
import "./index.css";

function Header(props) {
    return (
        <header>
            <div className="logo"><a href="https://blackrockdigital.github.io/startbootstrap-clean-blog/index.html"></a></div>
            <NavBar />
            <h1>Clean Blog</h1>
            <h2>A Blog Theme by Start Bootstrap</h2>
        </header>
    )
}

export default Header;