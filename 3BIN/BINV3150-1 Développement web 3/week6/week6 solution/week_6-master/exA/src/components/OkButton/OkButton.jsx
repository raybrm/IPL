import React, { useContext } from 'react';
import countersContext from "contexts/countersContext"


const OkButton = () => {

  const {
    increaseOkScore
  } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    increaseOkScore();
  }

  return (
    <button onClick={handleClick}>
        increase ok
    </button>
  );
}

export default OkButton;
