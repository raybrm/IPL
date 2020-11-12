import React, { useState } from "react";


const Context = React.createContext(null);

const ProviderWrapper = (props) => {

    const [goodScore, setGoodScore] = useState(0);
    const [okScore, setOkScore] = useState(0);
    const [badScore, setBadScore] = useState(0);

    const increaseGoodScore = () => setGoodScore(goodScore+1);
    const increaseOkScore = () => setOkScore(okScore+1);
    const increaseBadScore = () => setBadScore(badScore+1);
    const resetAll = () => {
        setGoodScore(0);
        setOkScore(0);
        setBadScore(0);
    }

    const exposedValue = {
        goodScore,
        increaseGoodScore,
        okScore,
        increaseOkScore,
        badScore,
        increaseBadScore,
        resetAll,
    }

    return (
        <Context.Provider value={exposedValue}>
            { props.children }
        </Context.Provider>
    )
}

export {
    Context,
    ProviderWrapper,
}
export default Context;