import React from 'react';

import Button from 'components/Button/Button';

const App = ({good, neutral, bad, increaseGood, increaseBad, increaseNeutral}) => {

  return(
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={increaseGood} text={'good'}/>
    </div>
  )
}

export default App