import React from "react";
import "../styles.css";

function Superhero(props) {
    return (
        <div onClick={()=>props.display(props.index)}>
            <ul>
                <img className="heroPic" src={require("../../images/" + props.filename)} alt="Superhero" />
            </ul>
        </div>
    )
}

export default Superhero;
