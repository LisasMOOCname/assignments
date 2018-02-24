import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        /*Could deconstruct the inputs: let {title, description, price, imgUrl, completed} = props;
        Then wouldn't need to put "props" in each input object value. */
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
    handleChange(event) {
        let {category, title, keywords, entry, code, screenshot, value} = event.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs
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
        let { category, title, keywords, entry, code, screenshot, value } = this.state.inputs;
        return (
            <form onSubmit={this.handlesubmit}>
                <input onChange={this.handleChange} name="category" type="text" value={category} />
                <input onChange={this.handleChange} name="title" type="text" value={title} placeholder="Topic Title" />
                <input onChange={this.handleChange} name="keywords" type="text" value={keywords} placeholder="Enter each keyword or tag separated by a comma" />
                <input onChange={this.handleChange} name="entry" type="text" value={entry} placeholder="Post your entry here." />
                <input onChange={this.handleChange} name="code" type="text" value={code} placeholder="Code Sample" />
                <input onChange={this.handleChange} name="screenshot" type="text" value={screenshot} placeholder="Screenshot URL" />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;