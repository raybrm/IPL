import React, {useContext} from 'react'
import countersButtons from "../../contexts/countersContext";

const BadButton = () => {

    const {bad, increaseBad} = useContext(countersButtons)

    return <li> Bad : {bad} <button onClick={increaseBad}>increase bad </button> </li>
}

export default BadButton