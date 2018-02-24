import React from "react";
import "./index.css";

function RandomColor(props) {
    console.log(props);
    let styling = {
        backgroundColor: props.hexCode
    }
    return (
        <div className="box" style={styling} ></div>
    )
}

export default RandomColor;