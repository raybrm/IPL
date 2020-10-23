import React, {useContext} from 'react'
import opinionsContext from 'contexts/opinionsContext'

const Form = () => {

    const { newOpinion, setNewOpinion, addOpinion } = useContext(opinionsContext)

    const handleOpinionChange = (event) => {
        setNewOpinion(event.target.value)
    }


    return (
        <div>
            <input value={newOpinion} onChange={handleOpinionChange}/>
            <button onClick={addOpinion}> Add Opinion </button>
        </div>
    )
}

export default Form