import React, { useState, useContext } from 'react';

import apContext from 'contexts/disastersContext'

const Calendar = () => {

  const [countLabel , setCountLabel] = useState('') 
  const [yearLabel, setYearLabel] = useState('enter a year...')
  const { buildDisasters, sortedDisastersByDate } = useContext(apContext)

  const handleChangeInput = (e) => {
    e.preventDefault();
    setCountLabel(e.target.value)
  }

  const handleChangeYearInput = (e) => {
    e.preventDefault();
    setYearLabel(e.target.value)
  }

  const handleClickButton = (e) => {
    e.preventDefault();
    buildDisasters(countLabel, yearLabel)
  }

  return (
    <div>
      <h1>Calendrier des désastres de 2021</h1>
        <input value={yearLabel} onChange={handleChangeYearInput}></input>
        <input value={countLabel} onChange={handleChangeInput}></input> <button onClick={handleClickButton}> Charger les désastres</button>
        
        {
          sortedDisastersByDate.length === 0 ? <p> Aucun désastre</p> 
                : <ul>
                    {sortedDisastersByDate.map(disaster => <li key={disaster.id}>{disaster.date.toLocaleString()} - {disaster.name}</li>)}
                  </ul>
        }
        
    </div>
  );
}

export default Calendar;
  