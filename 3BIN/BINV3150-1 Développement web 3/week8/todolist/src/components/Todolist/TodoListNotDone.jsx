import React, { useContext } from 'react'
import todoContext from 'contexts/todoContext'
import Todolist from '../Todolist/Todolist'

const TodoListNotDone = () => {

    const {sortedTodoListNotDone} = useContext(todoContext)

    const msg = "aucune tâche dans la liste, veuillez en ajouter une grâce au formulaire ci-dessous"

    return(
        <>
        {
            sortedTodoListNotDone.length === 0 ? <p>{msg}</p> : <Todolist toDoList={sortedTodoListNotDone}/>
        }
        </>
    )
}
export default TodoListNotDone