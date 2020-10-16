import React from 'react'
import Form from 'components/Form/Form'
import Persons from 'components/Person/Persons'
import Filter from 'components/Filter/Filter'

const App = ({persons, addPerson, newName, changeName, newNumber, changeNumber, filter, changeFilter}) => {

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} changeFilter={changeFilter}/>
            <h3>Add a new</h3>
            <Form 
                newName={newName}
                changeName={changeName}
                addPerson={addPerson}
                newNumber={newNumber}
                changeNumber={changeNumber} 
            />
            <h3>Numbers</h3>
            <Persons persons={persons} />
        </div>
    )
}

export default App