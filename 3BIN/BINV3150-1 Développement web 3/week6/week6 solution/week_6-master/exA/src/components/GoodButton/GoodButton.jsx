import React, { useContext } from 'react';
import countersContext from "contexts/countersContext"


const GoodButton = () => {

  const {
    increaseGoodScore
  } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    increaseGoodScore();
  }

  return (
    <button onClick={handleClick}>
        increase good
    </button>
  );
}

export default GoodButton;
