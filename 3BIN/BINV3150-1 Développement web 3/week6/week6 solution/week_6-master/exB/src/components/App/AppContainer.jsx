import React from 'react';
import { ProviderWrapper as OpinionsProvider } from '../../contexts/opinionsContext';
import App from './App';

const AppContainer = () => {
  return (
    <OpinionsProvider>
      <App/>
   </OpinionsProvider>
  );
}

export default AppContainer;
