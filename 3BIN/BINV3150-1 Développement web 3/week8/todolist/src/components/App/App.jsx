import React from 'react'
import Form from '../Form/Form'
import TodoListNotDone from 'components/Todolist/TodoListNotDone'
import TodoListDone from 'components/Todolist/TodoListDone'

const App = () => {

    return (
        <>  
            <TodoListNotDone/>
            <Form/>
            <TodoListDone/>
        </>
    )
}

export default App