import React, { useContext } from 'react';
import opinionsContext from "contexts/opinionsContext"


const OpinionItem = ({
    opinion
}) => {

    const {
        voteForOpinion // fonction 
    } = useContext(opinionsContext);

    const handleClick = () => {
        voteForOpinion(opinion.id)
    }

  return (
    <div>
        <span className="label">
            { opinion.label}
        </span>
        &nbsp;:&nbsp; 
        <span className="score">
            { opinion.score}
        </span>
        &nbsp;
        <button onClick={handleClick}>
            Vote
        </button>
    </div>
  );
}

export default OpinionItem;
