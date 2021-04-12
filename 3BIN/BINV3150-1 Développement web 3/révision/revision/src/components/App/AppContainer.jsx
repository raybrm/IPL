import React, {useState} from 'react'
import App from 'components/App/App'


const AppContainer = () => {

    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)

    const increaseGood = () => {setGood(good+1)}
    const increaseBad = () => {setBad(bad+1)}
    const increaseNeutral = () => {setNeutral(neutral+1)}
    return (
        <App 
            good={good}
            bad={bad}
            neutral={neutral}
            increaseBad={increaseBad}
            increaseGood={increaseGood}
            increaseNeutral={increaseNeutral}
        />
    )

}

export default AppContainer