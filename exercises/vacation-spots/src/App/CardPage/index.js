import React, {Component} from "react";
import VacationCard from "./VacationCard";
import "./index.css";

function CardPage(props) {
    let vacationSpots = [
        {
         place: "Scotland",
         price: "$1800",
         timeToGo: "Fall"
        },
        {
         place: "Greece",
         price: "$1200",
         timeToGo: "Winter"
        },
        {
        place: "Paris",
        price: "$2400",
        timeToGo: "Spring"
        },
        {
        place: "Mexico",
        price: "$800",
        timeToGo: "Summer"
        },
        {
        place: "England",
        price: "$1400",
        timeToGo: "Year Round"
        }
    ];
    return (
        <div className = "card-container">
            {vacationSpots.map((info, index) => {
            return <VacationCard {...info} key = {index} />
            })}
        </div>
    )
}

export default CardPage;