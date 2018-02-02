import React from "react";

function Pet(props) {
    return (
        <div>
            <li>{props.petName}, {props.breed}</li>
        </div>
    )
}

export default Pet;
