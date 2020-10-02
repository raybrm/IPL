import React from 'react'
import Statistics from 'components/Statistic/Statistics'
import Button from 'components/Button/Button'

const App = ({good, setGood, neutral, setNeutral, bad, setBad }) => {

    return (
        <div>
          <h1>give feedback</h1>
          <Button
            handleClick={setGood}
            text='good' 
          />
          <Button
            handleClick={setNeutral}
            text='neutral'
          />     
          <Button
            handleClick={setBad}
            text='bad'
          />

          <Statistics good={good} neutral={neutral} bad={bad}/>           
        </div>
      )
}

export default App