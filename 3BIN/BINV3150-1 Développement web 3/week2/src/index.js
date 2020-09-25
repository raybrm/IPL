import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from "components/App/AppContainer"

ReactDOM.render(<AppContainer />, document.getElementById('root')) // 'App' est un react component qui est mis dans l'élement root qui se trouve dans la page index.html
// 'render' rend donc l'élement visible sur la page index.html dans la div 'root'