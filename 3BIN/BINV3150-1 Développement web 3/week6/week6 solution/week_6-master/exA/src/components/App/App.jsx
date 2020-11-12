import React, { useContext } from 'react';
import countersContext from "contexts/countersContext"
import GoodButton from 'components/GoodButton/GoodButton';
import OkButton from 'components/OkButton/OkButton';
import BadButton from 'components/BadButton/BadButton';
import ResetButton from 'components/ResetButton/ResetButton';


const App = () => {

  const {
    goodScore,
    okScore,
    badScore,
  } = useContext(countersContext);

  return (
    <div>
      <ul>
        <li>Good : {goodScore} <GoodButton/></li>
        <li>Ok : {okScore} <OkButton/></li>
        <li>Bad : {badScore} <BadButton/></li>
      </ul>
      <ResetButton />
    </div>
  );
}

export default App;
