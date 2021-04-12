import React from "react";

import AddPerson from "components/AddPerson/AddPerson";
import Person from "components/Person/Person";

const App = ({ persons, newName, setNewName, addPerson, newPhone, setNewPhone, delPerson }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <AddPerson
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      { persons.map((person) => (
        <Person key={person.id} person={person} delPerson={delPerson}/>
      ))}
    </div>
  );
};

export default App;
