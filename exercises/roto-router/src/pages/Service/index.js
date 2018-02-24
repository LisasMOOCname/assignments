import React from "react";
import services from "../../shared/services.json";
//import Services from "../Services";

function Service(props) {
    let {index} = props.match.params;
    let {name, price, description} = services[index];
    return (
        <div>
            <h2 className="serviceTitle">{services[index].name}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
        </div>
    )
}

export default Service;