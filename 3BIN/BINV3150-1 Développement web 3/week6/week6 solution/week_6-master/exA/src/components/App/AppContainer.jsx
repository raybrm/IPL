import React from 'react';
import { ProviderWrapper as CounterProvider } from '../../contexts/countersContext';
import App from './App';

const AppContainer = () => {
  return (
    <CounterProvider>
      <App/>
   </CounterProvider>
  );
}

export default AppContainer;
