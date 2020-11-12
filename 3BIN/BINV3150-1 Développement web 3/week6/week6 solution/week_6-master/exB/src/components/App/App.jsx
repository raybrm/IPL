import React from 'react';
import AddOpinionForm from 'components/AddOpinionForm/AddOpinionForm';
import OpinionsList from 'components/OpinionsList/OpinionsList';


const App = () => {

  return (
    <div>
        <OpinionsList/>
        <AddOpinionForm/>
    </div>
  );
}

export default App;
