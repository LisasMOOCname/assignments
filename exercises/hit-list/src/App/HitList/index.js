import React, {Component} from "react";
import Hit from "./Hit";
import axios from "axios";

const dataUrl = "http://api.vschool.io:6543/hitlist.json";

class HitList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            loading: true,
            err: false,
            errMsg: ""
        };
    }

    componentDidMount() {
        axios.get(dataUrl)
            .then((response) => {
            let results = response.data;
            this.setState({
                hits: results,
                loading: false
            })
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
        let {hits, loading, err, errMsg} = this.state;
        return (
            loading ?
                <div><h1>Your data is loading.</h1></div>
                :
                err?
                    <div>
                        <p>Sorry, your data cannot be retrieved.</p> 
                        <p> {errMsg} </p>
                    </div>
                    :
                    <div>
                        <h1>Hit List</h1>
                        {
                            hits.map((hit, index) => {
                            let {name, image} = hit;
                            return <Hit key={index} name={name} image={image} /*{...Hit}*/ />;
                        })}
                    </div>
                )
    }
}

export default HitList;