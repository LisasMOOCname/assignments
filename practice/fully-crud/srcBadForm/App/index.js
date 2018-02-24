import React from "react";
import ToDoList from "./ToDoList";
import ToDoItem from "./ToDoItem";
import {Switch, Route} from "react-router-dom";


function App(props) {
    return (
        <div>
            <h1>My To Do List</h1>
            <Switch>
                <Route exact path="/toDos" component={ToDoList} />
                <Route path="/toDos/:id" component={ToDoItem} />
            </Switch>
            <footer>&copy; 2018</footer>
        </div>
    )
}

export default App;