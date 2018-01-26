import React, {Component} from "react";
import Article from "./Article";

function App(props) {
    return <div>
            <Article className="reusable-me" title="My title" text="This is content."></Article>
        </div>
}

export default App;