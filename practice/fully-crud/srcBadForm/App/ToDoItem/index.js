import React, {Component} from "react";
import Loading from "../shared/Loading";
import Form from "../shared/Form";
import axios from "axios";
let toDoItemUrl = "https://api.vschool.io/lesab/todo/";


class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDo: {},
            loading: true
            displayForm: false
        }
        this.removeItem = this.removeItem.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.editToDo = this.editToDo.bind(this);
    }
    componentDidMount() {
        let {id} = this.match.props.params;
        axios.get(toDoItemUrl + id)
            .then((response) => {
                let {data} = response;
                this.setState({
                    toDo: data,
                    loading: false
                })
            .catch((err) => {
                console.error(err);
                this.setState({
                    toDos: {},
                    loading: false
                })
            })
        })
    }
    removeItem() {
        let {id} = this.props.match.params;
        axios.delete(toDoItemUrl + id)
            .then((response) => {
                alert(`Item ${id} was removed.`);
                this.props.history.push("/");
            })
            .catch((err) => {
                console.error(err);
                this.props.history.push("/");
            })
    }
    toggleDisplay() {
        this.state((prevState) => {
            return {
                displayForm: !prevState.displayForm
            }
        })
    }
    editToDo(toDo){
        let {id} = this.props.match.params;
        axios.put(toDoItemUrl + id, toDo)
            .then((response) => {
                let {data} = response;
                this.setState({
                    toDo: data,
                    displayForm: false
                });
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        let {toDo, loading, displayForm} = this.state;
        let {title, description, price, completed, imgUrl} = toDo;
        let style = {backgroundImage: `url{({imgUrl})`};
        let formStyle = {display: displayForm ? "initial" : "none"};
        return (
            loading ?
            <Loading />
            :
            <div style={style}>
                <h1>{title}</h1>
                <h2>Price: ${price}</h2>
                <p>Completed: {completed ? "Yes" : "No"}</p>
                <p>{description}</p>
                <button onClick={this.removeItem}>Delete</button> {/*Not sure this is where this goes.*/}
                <button onClick={this.toggleDisplay}>Edit</button>
                <div style={formStyle}>
                    <Form {...toDo} submit={this.editToDo} />
                </div>
            </div>
        )
    }
}

export default ToDoItem;