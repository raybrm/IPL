import React from 'react'

const Button = ({displayToDoListDone, setDisplayToDoListDone}) => {

    const handleClick = (event) => {
        event.preventDefault();
        setDisplayToDoListDone(!displayToDoListDone)
    }

    const buttonMsg = displayToDoListDone ? "Cacher les tâches finies" : "Afficher les tâches finies"

    return (
        <button onClick={handleClick}>{buttonMsg}</button>
    )
    
}

export default Button