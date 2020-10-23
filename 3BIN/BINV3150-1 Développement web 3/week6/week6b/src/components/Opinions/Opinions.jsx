import React, {useContext} from 'react'

import opinionsContext from 'contexts/opinionsContext'
import Opinion from "./Opinion";

const Opinions = () => {

    const {sortedOpinions} = useContext(opinionsContext)

    return (
        <ul>
            {sortedOpinions.map(opinion =>
                <Opinion key={opinion.title} opinion={opinion}/>
            )}
        </ul>
    )
}

export default Opinions