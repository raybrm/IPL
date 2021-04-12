import React from "react";

const Person = ({ newName, setNewName, addPerson, newPhone, setNewPhone }) => {
  
  const handleAddPerson = (event) => {
    event.preventDefault();
    addPerson();
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
      setNewPhone(event.target.value);
  }

  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
        number: <input value={newPhone} onChange={handlePhoneChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Person;
