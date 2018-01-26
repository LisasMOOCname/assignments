import React, {Component} from "react";
import "./index.css";

function VacationCard(props) {
    let seasonStyle = { backgroundColor: ""};
    switch (props.timeToGo) {
        case "Fall":
            seasonStyle.backgroundColor = "rgb(191, 191, 255)";
            break;
        case "Winter":
            seasonStyle.backgroundColor = "rgb(36, 189, 255)";
            break;
        case "Spring":
            seasonStyle.backgroundColor = "rgb(254, 190, 240)";
            break;
        case "Summer":
            seasonStyle.backgroundColor = "rgb(173, 255, 113)";
            break;
        case "Year Round":
            seasonStyle.backgroundColor = "rgb(255, 239, 127)";
    }
     return(
        <div className="card" style={seasonStyle}>
            <h3>{props.place}</h3>
            <h5>{props.price}</h5>
            <p>Time to go: {props.timeToGo}</p>
        </div>
        )
}

export default VacationCard;