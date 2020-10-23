import React, {useContext} from 'react'
import countersButtons from "../../contexts/countersContext";

const GoodButton = () => {

    const {good, increaseGood} = useContext(countersButtons)

    return <li>Good: {good} <button onClick={increaseGood}>increase good</button></li>
}

export default GoodButton