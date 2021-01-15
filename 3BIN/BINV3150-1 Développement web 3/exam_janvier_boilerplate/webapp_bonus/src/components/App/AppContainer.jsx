import React from 'react';
import App from './App';

import {ProviderWrapper as ApProviderWrapper} from 'contexts/disastersContext'
import {BrowserRouter as Router} from 'react-router-dom'

const AppContainer = () => {
  return (
    <ApProviderWrapper>
      <Router>
        <App/>
      </Router>
    </ApProviderWrapper>
  );
}

export default AppContainer;
