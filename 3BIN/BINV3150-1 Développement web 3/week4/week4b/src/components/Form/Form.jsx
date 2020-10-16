import React from 'react'


const Form = ({newName,changeName, addPerson, newNumber, changeNumber}) => {

    // Mettre ici les handlers du form et pas dans AppContainer comme l'AppContainer
    // n'est pas censé savoir qu'il y a un formulaire 
    const handleForm = (event) => {
        event.preventDefault()
        addPerson()
    } 
    
    const handleNameChange = (event) => {
        changeName(event.target.value)
    }

    const handleNumberChange = (event) => {
        changeNumber(event.target.value)
    }

    return (
        <form onSubmit={handleForm}>
            <div>
                name : <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form
