import React from 'react'


const Form = ({newName,changeName, addPerson}) => {

    // Mettre ici les handlers du form et pas dans AppContainer comme l'appContainer ne sait pas si y a un form
    const handleForm = (event) => {
        event.preventDefault()
        addPerson()
    } 
    
    const handleNameChange = (event) => {
        changeName(event.target.value)
    }

    return (
        <form onSubmit={handleForm}>
            <div>
                name : <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form
