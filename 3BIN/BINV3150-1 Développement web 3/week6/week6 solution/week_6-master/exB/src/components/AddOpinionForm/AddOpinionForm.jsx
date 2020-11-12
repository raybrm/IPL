import React, { useContext, useState } from 'react';
import countersContext from "contexts/opinionsContext"


const AddOpinionForm = () => {

  const {
    addOpinion
  } = useContext(countersContext);
  
  // WE DO NOT USE A CONTAINER HERE
  // THIS STATE IS REALLY BELONGING TO THIS COMPONENT ONLY
  // We could have decided otherwise. The decision is up to you. 
  const [label, setLabel] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    addOpinion(label);
    setLabel("");
  }

  const handleLabelChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    setLabel(newValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleLabelChange} value={label} />
      <button type="submit">
        Add Opinion
      </button>
    </form>
  );
}

export default AddOpinionForm;
