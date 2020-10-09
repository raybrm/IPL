import React, {useState} from 'react'
import App from './App'

const AppContainer = () => {

    const [ persons, setPersons ] = useState([{name : 'Arto Hellas'}])
    const [ newName, setNewName ] = useState('enter a name ...')

    // fonction qui modifie la liste de personnes
    const addPerson = () => {
        const newPerson = {
            name : newName,
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
    } 


    return <App 
            persons={persons} 
            addPerson={addPerson}
            newName ={newName}
            changeName = {setNewName}
            />
}

export default AppContainer
