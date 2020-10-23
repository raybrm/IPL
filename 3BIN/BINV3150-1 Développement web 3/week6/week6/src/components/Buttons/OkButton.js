import React, {useContext} from 'react'
import countersButtons from "../../contexts/countersContext";

const OkButton = () => {

    const {ok, increaseOk} = useContext(countersButtons)

    return <li>Ok: {ok} <button onClick={increaseOk}>increase ok</button></li>
}

export default OkButton