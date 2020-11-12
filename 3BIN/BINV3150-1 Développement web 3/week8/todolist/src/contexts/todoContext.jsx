import React, {useEffect, useState} from 'react'
import todoServices from 'services/todoServices'
import todolistServices from 'services/todoServices'

const Context = React.createContext(null)

const ProvideWrapper = (props) => {

    const [toDoList, setTodoList ] = useState([])

    const initialLoad = () => {
        todolistServices.getAll()
                        .then(response => setTodoList(response))
                        .catch(error => console.error("Unable to load data", error))
    }

    useEffect(initialLoad, [])// fait le la toute première fois uniquement

    const setTodo = (id, label, done, priority) => { //modifie les trois d'un coup même si il y a qu'un seul attribut qui change à la fois 
        const index = toDoList.findIndex((todo) => todo.id === id)
        if (index === -1) {
            console.warn("todo item with provided id does not exist", id)
            return
        }
        const todoItem = toDoList[index]
        const newTodoItem = {
            ...todoItem,     // copie tous les attributs de l'objet
            label,
            done,
            priority
        }
        const newTodoList = [...toDoList] // copie de la liste
        newTodoList[index] = newTodoItem

        todoServices.update(id, newTodoItem)
                    .then(() => setTodoList(newTodoList))
                    .catch(error => console.error("Unable to update data", error))
    }

    const addTodo = (todo) => {
        todolistServices.add(todo).then(insertedTodo => setTodoList(toDoList.concat(insertedTodo)))
                                  .catch(error => console.error("Unable to insert data", error))
    }

    const deleteTodo = (id) => {
        const index = toDoList.findIndex((todo) => todo.id === id)
        if (index === -1) {
            console.warn("todo item with provided id does not exist", id)
            return
        }
        const newTodoList = [...toDoList]
        newTodoList.splice(index,1)
        todoServices.deleteTodo(id)
                    .then(() => setTodoList(newTodoList))
                    .catch(error => console.error("Unable to delete data", error))
    }

    const tasksDoneSorted = () => {
        return toDoList.filter(todo => todo.done)
    }

    const taskNotDoneSorted = () => {
        return toDoList.filter(todo => !todo.done)
    }

    const sortingTodoList = (todolist) => {
        if (todolist !== undefined) {
            return todolist.sort((a, b) => a.priority - b.priority)
        }
        
    }

    const sortedTodoListDone = sortingTodoList(tasksDoneSorted())
    const sortedTodoListNotDone = sortingTodoList(taskNotDoneSorted())

    const exposedValue = {
        setTodo,
        addTodo,
        deleteTodo,
        sortedTodoListDone,
        sortedTodoListNotDone
    }

    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider>
    )
}

export  {
    Context,
    ProvideWrapper
}

export default Context