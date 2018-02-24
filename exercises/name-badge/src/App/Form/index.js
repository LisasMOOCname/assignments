import React, {Component} from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                aboutYou: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let {name, value} = event.target; 
        /*validatePhone();*/
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs, //returns prev state and only updates changes.
                    [name]: value
                   
                }
            }
        })
    }

    /*validatePhone() {
          if(!(phone.value >= 0 && phone.value <= 9){
              don't allow the input
        }
    }
    /*validateInputLength() {
        for(key in inputs) {
            if(inputs[key].length < 3) {
                return false;
            }
        }
        else {
            button.style = border: 2px solid rgb(0, 0, 0);
            button.disabled = false;
        }
    }*/
   
    /*clearInputs() {
        if(this.props.clear) {
            //Is this.clearInputs() really better than this.setState?
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phone: "",
                favoriteFood: "",
                aboutYou: ""
            }
        })
}
} */
   handleSubmit(event){
        event.preventDefault();
      /*  if(validateInputLength()) {
            button becomes enabled and style colors change
   } 
        let badgeInfo = {...this.state.inputs};
        this.props.submit(badgeInfo);
        this.clearInputs();*/
    }
    render() {
        let {firstName, lastName, email, placeOfBirth, phone, favoriteFood, aboutYou} = this.state.inputs;
        return (
            <div className="parent">
            <form onSubmit = {this.handleSubmit}>
                <input className="oneLiner" type="text" minlength="3" onChange={this.handleChange} name="firstName" value={firstName} placeholder="First Name" required />
                <input className="oneLiner" type="text" onChange={this.handleChange} name="lastName" value={lastName} placeholder="Last Name" required />
                <input className="oneLiner" type="email"onChange={this.handleChange} name="email" value={email} placeholder="Email" required />
                <input className="oneLiner" type="text" onChange={this.handleChange} name="placeOfBirth" value={placeOfBirth} placeholder="Place of Birth" required />  
                <input className="oneLiner" type="text" onChange={this.handleChange} name="phone" value={phone} placeholder="Phone" required />
                <input className="oneLiner" type="text" onChange={this.handleChange} name="favoriteFood" value={favoriteFood} placeholder="Favorite Food" required />  
                <textarea className="multiLine" onChange={this.handleChange} name="aboutYou" value={aboutYou} placeholder="Tell us about yourself" required />
                <button disabled>Submit</button>          
            </form>
            </div>
        )
    }
}

export default Form;