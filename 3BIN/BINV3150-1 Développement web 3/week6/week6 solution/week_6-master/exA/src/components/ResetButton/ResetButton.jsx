import React, { useContext } from 'react';
import countersContext from "contexts/countersContext"


const ResetButton = () => {

  const {
    resetAll
  } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    resetAll();
  }

  return (
    <button onClick={handleClick}>
        Reset scores
    </button>
  );
}

export default ResetButton;
