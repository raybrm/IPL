import React, {useContext, useState } from 'react'
import todoContext from 'contexts/todoContext'

const Label = ({todo}) => {
    
    // état propre au composant
    const [newLabel, setNewLabel] = useState(todo.label)
    const {setTodo} = useContext(todoContext)
 
    const handleLabelChange = (event) => {
        setNewLabel(event.target.value)
        setTodo(todo.id, event.target.value, todo.done, todo.priority) // ne pas mettre newLabel car il la méthode est asynchrone
    }
    
    return (
        <input value={newLabel} onChange={handleLabelChange}/>
    )
}

export default Label