// La liste des TO DO

import React from "react"
import Todo from "./Todo"

const Todolist = ({toDoList}) => {

    return(
        <ul>
            {toDoList.map(todo =>
                <Todo key={todo.id} todo={todo}/>
            )}
        </ul>
    )
}

export default Todolist