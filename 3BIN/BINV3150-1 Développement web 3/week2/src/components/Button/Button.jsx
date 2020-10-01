import React from 'react'

// Recupèration de l'attribut dans le bouton pour le passer à la méthode handleClick
/*
  handleClick est une référence vers la méthode changeCount passé par les props
*/
const Button = ({ handleClick, text, delta}) => {

  // e.target.dataset.delta -> recupère l'attribut du boutton
  // de manière basique : const helperHandleClick = () => {handleClick(delta)} // en utilisant le props directement
  const helperHandleClick = (e) => handleClick(parseInt(e.target.dataset.delta)) // e represente l'événement, e.target représente l'élement cliquer

  return (
    <button onClick={helperHandleClick} data-delta={delta}>
      {text}
    </button>
  )
}
   

export default Button