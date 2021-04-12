import React, { useState, useEffect } from 'react'
import personService from 'services/persons'

import App from "./App"

const AppContainer = () => {

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

  const initialLoad = () => {
    console.log('initialLoad')

    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }
  useEffect(initialLoad, [])

  const addPerson = () => {
    const person = {
      name: newName,
      number: newPhone
    }

    personService
        .create(person)
        .then(response => {
          console.log("POST success !")
          setPersons(persons.concat(response))
          setNewName('')
          setNewPhone('')
        })
  }

  const delPerson = (person) => {
    const index = persons.findIndex(p => p.id === person.id) // la position dans le liste 
    const resultat = window.confirm("Delete" + person.name + "?")
    if (resultat) {
      personService
        .deletePerson(person.id)
        .then(response => {
          console.log("Del sucess !")
          const copyPerson = [...persons] // modifie sur une autre réference que celle dans l'état
          copyPerson.splice(index,1)
          setPersons(copyPerson)
        })
        .catch(error => console.error("Unable to delete data", error))
    }
  }
  
  return (
    <App
      persons={persons}
      newName={newName}
      setNewName={setNewName}
      addPerson={addPerson}
      newPhone={newPhone}
      setNewPhone={setNewPhone}
      delPerson={delPerson}
    />
  )

}

export default AppContainer