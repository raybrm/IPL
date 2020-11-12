import React, { useContext, useState } from 'react'
import todoContext from 'contexts/todoContext'

const Form = () => {

    const [ label, setLabel ] = useState('')
    const{addTodo} = useContext(todoContext)

    const handleAddTodo = (event) => {
        event.preventDefault()
        addTodo({
            label,
            done: false,
            priority: 3
        })
    }

    const handleLabelChange = (event) => {
        setLabel(event.target.value)
    }

    return(
        <form onSubmit={handleAddTodo}>
            <div>
                <input value={label} onChange={handleLabelChange}/>
                <button type="submit">Ajouter</button>
            </div>
        </form>
    )
}

export default Form