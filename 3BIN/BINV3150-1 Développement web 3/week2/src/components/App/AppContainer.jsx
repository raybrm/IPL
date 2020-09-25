import React, { useState } from 'react'
import App from "./App"

// Uniquement gestion de l'état
const AppContainer = () => {

    const [ counter, setCounter ] = useState(0) // gère l'état

    const changeCount = (delta) => {setCounter(counter + delta)}

    return (
    <App 
        counter={counter}
        changeCount={changeCount}
    />)
}

export default AppContainer