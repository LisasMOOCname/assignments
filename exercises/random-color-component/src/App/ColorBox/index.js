import React, { Component } from "react";
import RandomColor from "./RandomColor";
import axios from "axios";

const colorUrl = "http://www.colr.org/json/color/random";

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hexCode: "",
            loading: true,
            err: false,
            errMsg: ""
        };
    }

    componentDidMount() {
        axios.get(colorUrl).then((response) => {
            this.setState({
                hexCode: "#" + response.data.colors[0].hex,
                loading: false
            });
        })
            .catch((err) => {
                console.error(err);
                this.setState({
                    loading: false,
                    errMsg: err.message,
                    err: true
                })
            })
    }

    render() {
        let { hexCode, loading, err, errMsg } = this.state;
        return (
            loading ?
                <div><h1>Your data is loading.</h1></div>
                :
                err ?
                    <div>
                        <p>Sorry, your data cannot be retrieved.</p>
                        <p> {errMsg} </p>
                    </div>
                    :
                    <div>
                        <h2>Your random color:</h2>
                        <RandomColor hexCode={hexCode} />
                </div>
        )
    }
}

export default ColorBox;