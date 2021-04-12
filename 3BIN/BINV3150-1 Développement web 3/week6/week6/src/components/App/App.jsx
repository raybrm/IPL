import React from 'react'

import BadButton from "components/Buttons/BadButton";
import GoodButton from "../Buttons/GoodButton";
import OkButton from "../Buttons/OkButton";
import ResetButton from "../Buttons/ResetButton";



const App = () => {
    console.log("Render App")

    return (
        <div>
            <ul>
                <GoodButton/>
                <OkButton/>
                <BadButton/>
            </ul>
            <ResetButton/>
        </div>
    )

}

export default App
