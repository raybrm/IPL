import React from 'react'
import Display from 'components/Display/Display'
import Button from 'components/Button/Button'

// Composant de présentation uniquement pas de business
const App = ({counter, changeCount}) => {

    return (
      <div>
        <Display counter={counter}/>
        <Button
          handleClick={changeCount}
          text='plus'
          delta={1}
        />
        <Button
          handleClick={changeCount}
          text='zero'
          delta={-counter}
        />     
        <Button
          handleClick={changeCount}
          text='minus'
          delta={-1}
        />           
      </div>
    )
}

export default App