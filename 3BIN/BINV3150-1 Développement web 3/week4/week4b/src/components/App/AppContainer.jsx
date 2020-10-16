import React, {useState} from 'react'
import App from './App'

const AppContainer = () => {

    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
      ])
    const [ newName, setNewName ] = useState('enter a name ...')
    const [ newNumber, setNewNumber] = useState('enter a number...')
    const [ filter, setFilter] = useState('')

    function isPersonEqual(obj1, obj2) {
        return obj1.name === obj2.name
    }

    // fonction qui modifie la liste des personnes en vérifiant si il existe déjà ou pas
    const addPerson = () => {

        var isInArrayPerson = false;
        const newPerson = {
            name : newName,
            number : newNumber
        }

        persons.forEach((person) => {
            isInArrayPerson = isPersonEqual(person, newPerson)
        })

        if (!isInArrayPerson) {
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
        } else {
            alert(`${newName} is already added to phonebook`)
        }
    } 

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return <App 
            persons={personsToShow} 
            addPerson={addPerson}
            newName={newName}
            changeName={setNewName}
            newNumber={newNumber}
            changeNumber={setNewNumber}
            filter={filter}
            changeFilter={setFilter}
            />
}

export default AppContainer
