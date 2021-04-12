import React from 'react'

const Button = ({ handleClick, text }) => {

    console.log("button....")

    const helperHandleClick = () => handleClick()

    return (
        <button onClick={helperHandleClick}>
            {text}
        </button>
    )
}
   

export default Button