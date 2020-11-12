import React, {useContext } from 'react'
import todoContext from 'contexts/todoContext'

const Priority = ({todo}) => {
    
    const {setTodo} = useContext(todoContext)

    const handlePriorityChange = (event) => {
        console.log(event.target.value)
        setTodo(todo.id, todo.label, todo.done, event.target.value)
    }

    return (
        <select value={todo.priority} onChange={handlePriorityChange}>
            <option value="1">Haute</option>
            <option value="2">Moyenne</option>
            <option value="3">Basse</option>
        </select>
    )
}

export default Priority