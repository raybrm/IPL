import React from 'react';

import Calendar from 'components/Calendar/Calendar';
import Navbar from 'components/Navbar/Navbar';
import Settings from 'components/Settings/Settings';


import { Route, Switch } from 'react-router-dom';


const App = () => {

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
          <Route path='/'>
            <Calendar />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
