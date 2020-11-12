import React, { useContext, useState} from 'react'
import todoContext from 'contexts/todoContext'
import Button from 'components/Button/Button'
import Todolist from '../Todolist/Todolist'

const TodoListDone = () => {

    const {sortedTodoListDone} = useContext(todoContext)
    const [displayToDoListDone, setDisplayToDoListDone ] = useState(false)

    return (
        <>
            <Button displayToDoListDone={displayToDoListDone} setDisplayToDoListDone={setDisplayToDoListDone} /> 
            {
                displayToDoListDone ? <Todolist toDoList={sortedTodoListDone}/> : ""
            }
        </>
    )
}
export default TodoListDone