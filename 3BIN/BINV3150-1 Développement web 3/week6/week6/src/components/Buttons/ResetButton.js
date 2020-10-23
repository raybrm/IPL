import React, {useContext} from 'react'
import countersButtons from "../../contexts/countersContext";

const ResetButton = () => {

    const {resetAll} = useContext(countersButtons)

    return <button onClick={resetAll}> Reset scores</button>
}

export default ResetButton