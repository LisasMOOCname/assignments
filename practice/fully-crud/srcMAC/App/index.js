import React from "react";
import ToDoList from "./ToDoList";


function App(props) {
    return (
        <div>
            <h1>My To Do List</h1>
            <ToDoList />
            <footer>&copy; 2018</footer>
        </div>
    )
}

export default App;