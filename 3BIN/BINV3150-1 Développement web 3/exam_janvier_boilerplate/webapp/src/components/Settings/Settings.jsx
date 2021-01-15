import React, { useContext } from 'react';

import apContext from 'contexts/disastersContext'

const Settings = () => {

  const { addAction } = useContext(apContext)

  const handleClick = (event) => { // gère le clic 
    event.preventDefault()
    console.log("test")
    addAction("actiontest")
    // appelé une méthode ici
  }
  /*
  const handleSubmit = (e) => { // gère le clic mais sur un bouton formulaire ()
    e.preventDefault();
    addOpinion(label);
    setLabel("");
  }

  const handleLabelChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setLabel(newValue);
  }
  */

  return (
    <div>
      <h1>Configuration</h1>
      <button onClick={handleClick}>Ajout action</button>
    </div>
  )

}

export default Settings;
  