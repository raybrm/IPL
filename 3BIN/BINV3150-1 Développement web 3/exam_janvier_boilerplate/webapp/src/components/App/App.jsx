import React, { useContext } from 'react';

import Calendar from 'components/Calendar/Calendar';
import Navbar from 'components/Navbar/Navbar';
import Settings from 'components/Settings/Settings';


import apContext from 'contexts/disastersContext'
import { Route, Switch } from 'react-router-dom';


const App = () => {

  const { actions } = useContext(apContext)

  //console.log(actions)
  return (
    <div>
        <Navbar />
        <Switch>
          <Route path='/calendar'>
            <Calendar />
          </Route>
          <Route path='/config'>
            <Settings />
          </Route>
        </Switch>
        {actions.map(action => <p key={action.id}>{action.name}</p>)}
    </div>
  );
}

export default App;
