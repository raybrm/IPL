import React, { useState } from 'react'
import App from "./App"

// Uniquement gestion de l'état (business)
const AppContainer = () => {

    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem('counter'))) // gère l'état

    const changeCount = (delta) => {
        const newCounter = counter + delta
        setCounter(newCounter) // appel asynchrone
        localStorage.setItem("counter", JSON.stringify(newCounter))
    }
    
    return (
    <App 
        counter={counter}
        changeCount={changeCount}
    />)
}

export default AppContainer