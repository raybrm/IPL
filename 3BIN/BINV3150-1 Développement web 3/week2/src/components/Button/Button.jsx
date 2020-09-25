import React from 'react'

const Button = ({ handleClick, text, delta}) => {

  // e.target.dataset.delta -> recupère l'attribut du boutton
  // de manière basique : const helperHandleClick = () => {handleClick(delta)} // en utilisant le props directement
  const helperHandleClick = (e) => handleClick(parseInt(e.target.dataset.delta))

  return (
    <button onClick={helperHandleClick} data-delta={delta}>
      {text}
    </button>
  )
}
   

export default Button