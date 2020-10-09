import React from 'react'
import Form from 'components/Form/Form'
import Phonebook from 'components/Phonebook/Phonebook'

const App = ({persons, addPerson, newName, changeName}) => {

    return (
        <div>
            <h2>Phonebook</h2>
            <Form 
                newName={newName}
                changeName={changeName}
                addPerson={addPerson} 
            />
            <Phonebook persons={persons} />
        </div>
    )
}

export default App