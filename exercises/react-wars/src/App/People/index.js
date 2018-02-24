import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import PersonDetail from "../PersonDetail";

const swUrl = "https://swapi.co/api/people/";

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [],
            loading: true,
            err: false,
            errMssg: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(swUrl)
            .then((response) => {
                this.setState({
                    people: response.data,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
                    this.setState({
                        loading: false,
                        errMssg: err.message
                    })
            })
    }

    render() {
        return (
            loading ?
                <h1>Loading...</h1>
                :
                err ?
                    <div>
                        <p>"Your data could not be retrieved."</p>
                        <p>{errMssg}</p>
                    </div>
                :
                    <sidebar className="sidebarList">
                        {this.state.services.map(person => 
                    <Link to={`/people/${person._id}`} key={person._id}>{person.name}</Link>)}
                <Switch>
                    <Route path=`${this.props.match.url}/:personId` component={PersonDetail} />
                </Switch>
            </sidebar>
        )
    }
}

export default Sidebar;