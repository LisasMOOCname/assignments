import React, {Component} from "react";
import axios from "axios";
import Loading from "../shared/Loading.js";
import Form from "../shared/Form.js";
import {Link} from "react-router-dom";
import "./ToDoList.css";
let toDoUrl = "https://api.vschool.io/lesab/todo/";


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [],
            loading: true
        }
        this.addToDo = this.addToDo.bind(this);
    }

    componentDidMount() {
        axios.get(toDoUrl)
            .then((response) => {
                let {data} = response;
                this.setState({
                    toDos: data,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    toDos: [],
                    loading: false
                })
            })
    }

    addToDo() { // Changed from addToDo(toDo)
        axios.post(toDoUrl, this.state.toDos) // Changed from axios.post(toDoUrl, toDo)
            .then((response) => {
                let {data} = response;
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({
                    data: [],
                    loading: false
                })
            })
    }

    render() {
        let {toDos, loading} = this.state;
        return (
                loading ?
                    <Loading />
                    :
                    <div>
                        <Form submit={this.addToDo} clear />
                        <div className="toDosSidebar">
                            {toDos.map((toDo) => {
                                let {title, _id} = toDo;
                                return <Link to={`/toDos/${_id}`} key={_id}>{title}</Link>
                            })}
                        </div>   
                    </div>
        )
    }
}

export default ToDoList;