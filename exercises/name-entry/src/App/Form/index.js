import React, { Component } from "react";
import NamesList from "./NamesList";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namesList: [],
            inputs: {
                name: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: ""
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState((prevState) => {
            return {
                namesList: [...prevState.namesList, this.state.inputs.name]
            }
        })
        if (this.props.clear) {
            this.clearInputs();
        }
    }

    render() {
        let { name } = this.state.inputs;
        let { namesList } = this.state;
        return (
            <div>
                <h1 className="nameFormOutput">{name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input className="inputName" type="text" onChange={this.handleChange} name="name" value={name} placeholder="Name" />
                    <button className="nameFormBtn" type="submit">Submit</button>
                </form>
                <h2>Names</h2>
                {/* <ol className="namesList">
                    <li>{name}</li>
                </ol> */}
                {/* <ol>
                    {namesList.map((name, index) => {
                        return <li key={index}>{name}</li>
                    })}
                </ol> */}
                <NamesList namesList={namesList} />
            </div>
        )
    }
}

export default Form;