import React, { Component } from "react";
import Superhero from "./Superhero";
import superheroes from "./superheroes.json";
import "./styles.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroes: superheroes
        }
        this.display = this.display.bind(this);
    }

    display(index) {
        alert(this.state.superheroes[index].catchphrase);
    }
    render() {
        let { superheroes } = this.state;
        return (
            <div className="theBigKahunaForThePage">
                <h1>Superheroes!</h1>
                <div className="containerParent">
                    <div className="container">
                        {superheroes.map((hero, index) => {
                            return <Superhero key={index} {...hero} index={index} display={this.display} />;
                        })}
                    </div>
                </div>
                <h2>Click on a superhero!</h2>
            </div>
        )
    }
}

export default App;