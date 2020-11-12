import React, { useContext } from 'react'
import todoContext from 'contexts/todoContext'
import Label from './TodoAttributes/Label'
import Priority from './TodoAttributes/Priority'
import Done from './TodoAttributes/Done'

// affiche une tache todo
const Todo = ({todo}) => {

    const {deleteTodo} = useContext(todoContext)

    const handleDelete = (event) => {
        event.preventDefault()
        deleteTodo(todo.id)
    }

    return(
        <li>
            <Label todo={todo}></Label>
            <Priority todo={todo} ></Priority>
            <Done todo={todo}></Done>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Todo