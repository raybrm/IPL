import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ good, neutral, bad}) => {
    
    // Autre solution : mettre le contenue de StatisticsContenair ici ; le Container n'a pas trop d'utilité il ne gère pas d'état
    const totalFeedback = good + neutral + bad
    const average = (good*1 + neutral*0 + bad*-1)/totalFeedback
    const positive = good/totalFeedback * 100
    
    if (totalFeedback === 0) {
        return(
            <div>
                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <Statistic text={"good"} value={good}></Statistic>
                        <Statistic text={"neutral"} value={neutral}></Statistic>
                        <Statistic text={"bad"} value={bad}></Statistic>
                        <Statistic text={"totalfeedback"} value={totalFeedback}></Statistic>
                        <Statistic text={"average"} value={average}></Statistic>
                        <Statistic text={"positive"} value={positive}></Statistic>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Statistics