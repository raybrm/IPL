import React from 'react'

import AddPerson from 'components/AddPerson/AddPerson'
import Person from 'components/Person/Person'


const App = ({ persons, newName, setNewName, addPerson }) => {

  return(
    <div>
      <h2>Phonebook</h2>
      <AddPerson
        newName={newName}
        setNewName={setNewName}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} person={person} />)}
    </div>
  )

}

export default App
