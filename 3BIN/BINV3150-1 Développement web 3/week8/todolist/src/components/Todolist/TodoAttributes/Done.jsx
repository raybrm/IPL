import React, {useContext } from 'react'
import todoContext from 'contexts/todoContext'

const Done = ({todo}) => {
    const {setTodo} = useContext(todoContext)

    const handleDoneChange = (event) => {
        setTodo(todo.id, todo.label, !todo.done, todo.priority)
    }

    return (
        <input type="checkbox" checked={todo.done} onChange={handleDoneChange}/>
    )
}

export default Done