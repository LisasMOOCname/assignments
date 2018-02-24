import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        /*Could deconstruct the inputs: let {title, description, price, imgUrl, completed} = props;
        Then wouldn't need to put "props" in each input object value. */
        this.state = {
            inputs: {
                title: props.title || "",
                description: props.description || "",
                price: props.price || "",
                imgUrl: props.imgUrl || "",
                completed: props.completed || false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        //this.clearInputs = this.clearInputs.bind(this); Should this be here? Or why not?
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let {name, value, checked, type} = event.target; // deconstructing for the scope of this function.
        // Why did he remove "completed" from the above?
       // name === "price" ? value = Number(value) : null; this gets a warning
       if(name === "price") {
           value = Number(value);
       }
       else {
           value = null;
       }
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs, //return prev state and only update the changes.
                    [name]: type === "checkbox" ?  checked : value
                }
            }
        })
    }
    clearInputs() {
        this.setState({
            inputs: {
                title: "",
                description: "",
                price: "",
                imgUrl: "",
                completed: false
            }

        })
    }
    handleSubmit(event){
        event.preventDefault();
        let toDo = {...this.state.inputs};
        toDo.price = Number(toDo.price);
        this.props.submit(toDo) //This was removed on Github: ", this.props.id);"
        if(this.props.clear) {
            this.clearInputs();
        }
    }
    render() {
        let { title, description, price, imgUrl, completed } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="title" type="text" value={title} placeholder="Title" />
                <input onChange={this.handleChange} name="description" type="text" value={description} placeholder="Description" />
                <input onChange={this.handleChange} name="price" type="text" value={price} placeholder="Price" />
                <input onChange={this.handleChange} name="imgUrl" type="text" value={imgUrl} placeholder="Image URL" />
                <label htmlFor="completed">Completed:
                    <input onChange={this.handleChange} name="completed" id="completed" type="checkbox" checked={completed} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;