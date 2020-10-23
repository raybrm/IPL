import React, {useState} from 'react'

const Context = React.createContext(null)

const ProvideWrapper = (props) => {

    const [good, setGood] = useState(0);
    const [ok, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseGood = () => setGood(good + 1);
    const increaseOk = () => setNeutral(ok + 1);
    const increaseBad = () => setBad(bad + 1);

    const resetAll = () => {
        setGood(0)
        setNeutral(0)
        setBad(0)
    }

    const exposedValue = {
        good, increaseGood,
        ok, increaseOk,
        bad, increaseBad,
        resetAll
    }
    
    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider>
    )
}

export {
    Context,
    ProvideWrapper
}

export default Context
