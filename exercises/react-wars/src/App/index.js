import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Header from "./Header";
import People from "./People";
import PersonDetail from "./PersonDetail";

import Home from "./pages/Home";
import People from "./pages/People";
import "./index.css";

function App(props) {
    return (
        <div>
            <Header />
            <Sidebar />
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route path="/people" component = {People} />
                <Route path="/persondetail/:id" component = {PersonDetail} />
            </Switch>
        </div>
    )
}

export default App;