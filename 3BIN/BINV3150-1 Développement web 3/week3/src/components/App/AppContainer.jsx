import Loading from 'components/Loading/Loading'
import React, { useState } from 'react'
import App from "./App"

// Uniquement gestion de l'état (business)
const AppContainer = () => {

     // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [loading, setLoading] = useState(false)
    
    // fonction qui modifie l'état
    const increaseGood = () => setGood(good + 1)
    const increaseNeutral = () => setNeutral(neutral + 1)
    const increaseBad = () => setBad(bad + 1)

    const changeStateLoading = () => setLoading(!loading)


    if (loading === true) {
        setTimeout(changeStateLoading, 3000)
        return (
            <Loading/>
        )
    } else {
        return (
            <App 
                good={good}
                setGood={increaseGood}
                neutral={neutral}
                setNeutral={increaseNeutral}
                bad={bad}
                setBad={increaseBad}
            />
        )
    }
}

export default AppContainer