import React, { useContext } from 'react';
import countersContext from "contexts/opinionsContext"


const ResetButton = () => {

  const {
    reset
  } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    reset();
  }

  return (
    <button onClick={handleClick}>
        Reset opinions
    </button>
  );
}

export default ResetButton;
