import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Service from "../Service";
import services from "../../shared/services.json";
import "../pages.css";

function Services(props) {
    return(
        <div className="mainPage">
            <h1 className="servicesHeading">Services</h1>
            <div className="service-links">
                {services.map((service, i) => {
                    let {name} = service;
                    return <Link className="service-link" key={i} to={`/services/${i}`}>{name}</Link>
                    // without destructuring I thought, but then I get name undefined: 
                    // return <Link className="service-link" key={i} to={`/services/${service.i}`} >{service.name}</Link>
                })}
            </div>
            <Switch>
                <Route path="/services/:index" component={Service} />
            </Switch>
        </div>
    )
}

export default Services;