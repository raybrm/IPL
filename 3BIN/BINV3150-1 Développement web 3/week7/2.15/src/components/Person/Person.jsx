import React from "react";

const Person = ({ person, delPerson }) => {

  const handleClick = (e) => {
      console.log(e.target.id)
      //console.log(person.id)
      delPerson(person)
  }

  return (
    <p>
      {person.name} : {person.number} <button onClick={handleClick} id={person.id}> delete </button>
    </p>
  )
}

export default Person
