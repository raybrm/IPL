import React from 'react'
import Person from './Person'

const Phonebook = ({persons}) => {

    return (
        <ul>
            {persons.map( (person) => 
                <Person key={person.name} name = {person.name} />
            )}
        </ul>
    )
}

export default Phonebook