import React from "react";
import Pet from "./Pet";

function Friend(props) {
    return (
        <div className="friendsInfo">
            <p className="friendName">{props.name}</p>
            <p>Age: {props.age}</p>
            <ul><span className="petsHeader">{props.name}'s Pets:</span> 
                {props.pets.map((petInfo) => {
                    return <Pet {...petInfo} />
                })}
            </ul> 
        </div>      
    )
}

export default Friend;

