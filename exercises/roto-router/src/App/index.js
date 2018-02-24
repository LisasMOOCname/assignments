import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
// import Service from "../pages/Service";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App(props) {
    return (
        <div>
            <Header brand="Plummie's Plumbing" slogan="Plumb plummy plumbing!" />
            <Navbar />
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route path="/about" component = {About} />
                    <Route path="/services/" component = {Services} /> 
                </Switch>
            <Footer brand="Plummie's Plumbing" address="1230 S. Valley Rd." phone="215-892-8020" />
        </div>
    )
}

export default App;