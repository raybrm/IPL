import React, { useState, useContext } from 'react';

import apContext from 'contexts/disastersContext'

const Calendar = () => {

  const [countLabel , setCountLabel] = useState('') 
  const { buildDisasters, sortedDisastersByDate } = useContext(apContext)

  const handleChangeInput = (e) => {
    e.preventDefault();
    setCountLabel(e.target.value)
  }

  const handleClickButton = (e) => {
    e.preventDefault();
    buildDisasters(countLabel)
  }

  return (
    <div>
      <h1>Calendrier des désastres de 2021</h1>
        <input value={countLabel} onChange={handleChangeInput}></input> <button onClick={handleClickButton}> Charger les désastres</button>
        <ul>
          {sortedDisastersByDate.map(disaster => <li key={disaster.id}>{disaster.date.toLocaleString()} - {disaster.name}</li>)}
        </ul>
    </div>
  );
}

export default Calendar;
  