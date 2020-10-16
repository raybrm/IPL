import React, { useState, useEffect } from 'react'
import axios from 'axios'

import App from "./App"



const AppContainer = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
  }, [])

  const addPerson = () => {
    const person = {
      name: newName
    }
    setPersons(persons.concat(person))
    setNewName('')
  }
  
  return (
    <App
      persons={persons}
      newName={newName}
      setNewName={setNewName}
      addPerson={addPerson}
    />
  )

}

export default AppContainer