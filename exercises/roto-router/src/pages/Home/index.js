import React from "react";
import "../pages.css";
import duckPic from "./ducksInSink.png";

function Home(props) {
    return(
        <div className="mainPage">
            <img src={duckPic} alt="Ducks in sink full of water" />
            <p>Home plumbing is what we do.</p>
        </div>
    )
}

export default Home;