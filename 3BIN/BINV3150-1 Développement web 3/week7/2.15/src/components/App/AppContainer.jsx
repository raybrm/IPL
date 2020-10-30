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
  
  return (
    <App
      persons={persons}
      newName={newName}
      setNewName={setNewName}
      addPerson={addPerson}
      newPhone={newPhone}
      setNewPhone={setNewPhone}
    />
  )

}

export default AppContainer