import React, {Component} from "react";
import Loading from "../../Loading";
import axios from "axios";
let toDoItemUrl = "https://api.vschool.io/lesab/todo/";


class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDo: {},
            loading: true
        }
    }
    componentDidMount() {
        axios.get(toDoItemUrl);
    }
    render() {
        let {toDo, loading} = this.state;
        return (
            loading ?
            <Loading />
            :
            <div>

            </div>
        )
    }
}

export default ToDoItem;