import React from 'react'
import {ProvideWrapper as TodoListProvideWrapper} from '../../contexts/todoContext'
import App from './App'

// Contient toute la logique
const AppContainer = () => {

    return (
        <TodoListProvideWrapper>
            <App/>
        </TodoListProvideWrapper>
    )
}

export default AppContainer