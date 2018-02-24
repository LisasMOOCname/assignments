import React from "react";
import "./Header.css";
import willie from "./wikiWombat.png";

function Header(props) {
    return (
        <header>
            <div className="pic">
                <img className="willie" src={willie} alt="Willie the wiki wombat" />
            </div>
            <div className="title">
                <h1>HTML, CSS, Javascript Wiki</h1>
            </div>
        </header>
    )
}

export default Header;