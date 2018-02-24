import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import CategoriesNav from "./CategoriesNav"; //sidebar for medium/large screens, footer for small screens.

import Home from "../pages/home.js";
import Detail from "../pages/detail.js";
import FormEntry from "../pages/formEntry.js";

import "./App.css";

function App(props) {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route path="/formentry" component = {FormEntry} />
                <Route path="/detail/" component = {Detail} /> 
            </Switch>
            <CategoriesNav />
            <Form />
        </div>
    )
}

export default App;