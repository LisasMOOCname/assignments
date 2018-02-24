import React, {Component} from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                category: props.category || "", //is this what it should be for a dropdown menu item?
                title: props.title || "",
                keywords: props.keywords || [],
                entry: props.entry || "",
                code: props.code || "",
                screenshot: props.screenshotUrl || ""                
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}

handleChange(event) {
    let {category, title, keywords, entry, code, screenshot, value} = event.target;
    this.setState((prevState) => {
        return {
            inputs: {
                ...prevState.inputs,
                [category]: type // what should go here?
            }
        }
    })
}
clearInputs() {
    this.setState({
        inputs: {
            category: "",
            title: "",
            keywords: [],
            entry: "",
            code: "",
            screenshot: ""
        }

    })
}
handleSubmit(event){
    event.preventDefault();
    let post = {...this.state.inputs};
    this.props.submit(post);
    if(this.props.clear) {
        this.clearInputs();
    }
}
    render() {
    return (
        <form className="entryForm">
            <div className="entryFormColumnLeft">
                <label className="categoriesLabel">Category: 
                <select className="categories" name="categories" required>
                    <option value=""></option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="js">Javascript</option>
                </select>
                </label>
            </div>
            <div className="entryFormColumnRight">
                <input className="entryInput" name="topicTitle" placeholder="Topic title" required />
               <input className="entryInput" name="keywords" placeholder="Keywords/tags" required /> 
            </div>
            <div className="entryFormRow">       
                <input className="entryInput largeInput" name="topicEntry" placeholder="Topic information" required />
            </div>
            <div className="entryFormRow">
                <input className="entryInput largeInput" name="codeExample" placeholder="Code example" />
            </div>
            <div className="entryFormRow">
                <input className="entryInput largeInput" name="screenshot" placeholder="Screenshot" />
            </div>
            <div className="buttonRow">
                <button className="entryButton" type="submit">Post</button> 
                <button className="entryButton" type="reset">Clear</button>
                <button className="entryButton" type="submit">Delete</button> 
            </div>       
        </form>
    )
}

export default Form;

/*Form organized by row:
<form className="entryForm">
            <div className="entryFormRow">
            <select className="categories" name="categories">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">Javascript</option>
            </select>
        <input className="entryInput" name="topicTitle" placeholder="Topic title" />
        </div>
        <div className="entryFormRow">
        <input className="entryInput" name="keywords" placeholder="Keywords/tags" /> 
        </div>
        <div className="entryFormRow">       
        <input className="entryInput" name="topicEntry" placeholder="Topic information" />
        </div>
        <div className="entryFormRow">
        <input className="entryInput" name="codeExample" placeholder="Code example" />
        </div>
        <div className="entryFormRow">
        <input className="entryInput" name="screenshot" placeholder="Screenshot" />
        </div>
        <button className="entryButton" type="submit">Post</button> 
        <button className="entryButton" type="reset">Clear</button>
        <button className="entryButton" type="submit">Delete</button>        
        </form> */