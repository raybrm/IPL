import React from 'react';
import ReactDOM from 'react-dom';

import App from "components/App/AppContainer"

ReactDOM.render(<App />, document.getElementById('root')) // 'App' est un react component qui est mis dans l'élement root qui se trouve dans la page index.html
// 'render' rend donc l'élement visible sur la page index.html dans la div 'root'