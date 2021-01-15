import React, {useState, useContext } from 'react';

import apContext from 'contexts/disastersContext'

const Settings = () => {

  const { places, addPlace, deletePlace } = useContext(apContext)

  const [placeNameLabel, setPlaceNameLabel] = useState('')

  const handleChange = (e) => {
    e.preventDefault();
    setPlaceNameLabel(e.target.value)
  }

  const handleClickAddButton = (e) => {
    e.preventDefault()
    addPlace(placeNameLabel)
    setPlaceNameLabel('')
  }

  const handleClickDelButton = (e) => {
    e.preventDefault()
    deletePlace(e.target.id)
  }

  return (
    <div>
      <h1>Configuration</h1>
      <h2>Lieux</h2>
      <ul>
        {places.map(place => <li key={place.id}>{place.name}<button id={place.id} onClick={handleClickDelButton}>Supprimer</button></li>)}
      </ul>
      <input value={placeNameLabel} onChange={handleChange}/> <button onClick={handleClickAddButton}>Ajouter</button>
    </div>
  )

}

export default Settings;
  