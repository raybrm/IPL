import React, { useState } from 'react'
import App from "./App"

// Uniquement gestion de l'état (business)
const AppContainer = () => {

    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem('counter'))) // gère l'état

    const changeCount = (delta) => {setCounter(counter + delta)}

    localStorage.setItem("counter", JSON.stringify(counter))
    
    return (
    <App 
        counter={counter}
        changeCount={changeCount}
    />)
}

export default AppContainer