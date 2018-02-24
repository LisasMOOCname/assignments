import React, {Component} from "react";
import Main from "./Main";

function App(props) {
    return (
        <div>
            <header>
                <h1>Issues</h1>
            </header>
            <Main />
            <footer>
                <p>Disclaimer: All content is the opinion of the person posting.</p>
            </footer>
        </div>
    )
}

export default App;