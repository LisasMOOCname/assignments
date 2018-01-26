import React, {Component} from "react";
import "./index.css";


function Box(props) {
    return (
        <div className="container">
            {props.boxes.map((box) => {
                let divStyle = {backgroundColor: box.boxColor, borderColor: box.border}
                return (
                    <div style={divStyle}className="boxDiv">
                        <h2>{box.title}</h2>
                        <h3>{box.subtitle}</h3>
                        <p>{box.information}</p>
                    </div>
                )
                })
            }
        </div>
    )
}

export default Box;