import React, { useContext } from 'react';
import opinionsContext from "contexts/opinionsContext"
import OpinionItem from './OpinionItem';


const OpinionsList = () => {

  const {
    sortedOpinions
  } = useContext(opinionsContext);
  

  return (
    <ul>
        { sortedOpinions.map( opinion => (
            <OpinionItem key={opinion.id} opinion={opinion} />
        ))}
    </ul>
  );
}

export default OpinionsList;
