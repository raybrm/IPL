import React, { useContext } from 'react';
import countersContext from "contexts/countersContext"


const BadButton = () => {

  const {
    increaseBadScore
  } = useContext(countersContext);

  const handleClick = (e) => {
    e.preventDefault();
    increaseBadScore();
  }

  return (
    <button onClick={handleClick}>
        increase bad
    </button>
  );
}

export default BadButton;
