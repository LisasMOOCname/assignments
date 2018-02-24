import React, {Component} from "react";
import axios from "axios";

class PersonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
    }
    componentDidMount() {
        axios.get(`https://swapi.co/api/people/${this.props.match.params.personId`)
        .then(response => {
            this.setState({
                person: response.data
            })
        })
    }
    render() {
        let {id} = props.match.params;
        let {name, gender, height, mass, skin_color, hair_color, eye_color} = people[id];
        return (
            <div>
                <h2>${name}</h2>
                <ul>
                    <li>Gender: ${gender}</li> 
                    <li>Height:${height}</li>
                    <li>Mass: ${mass}</li>
                    <li>Skin color: ${skin_color}</li>
                    <li>Hair color: ${hair_color}</li>
                    <li>Eye color: ${eye_color}</li>
                </ul>
            </div>
        )
    }
}
export default PersonDetail;