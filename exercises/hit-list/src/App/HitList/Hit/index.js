import React from "react";

function Hit(props) {
    let {name, image} = props;
    return (
        <div>
            <img src={image} className="hitImage" alt="Hit subject" />
            <h3 className="hitName">{name}</h3>
        </div>
    )
}

export default Hit;