import React, {useContext} from 'react'

import opinionsContext from 'contexts/opinionsContext'

const Opinion = ({opinion}) => {

    const {increaseOpinion} = useContext(opinionsContext)

    const handlClick = () => { // propre au composant
        increaseOpinion(opinion)
    }

    return (
        <li>
            {opinion.title} : {opinion.score}
            <button onClick={handlClick}>Vote</button>
        </li>
    )
}

export default Opinion