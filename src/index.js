import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//./app arranca la aplicacion
import App from './App';

//aplicaciones encargadas de simular datos de manera local, hace que la app siga funcionando sin conexcion a internet 
import registerServiceWorker from './registerServiceWorker';

// Renderiza la app que hemos hecho   JSX, el root se pinta en el id del index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
