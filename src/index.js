import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

import Firebase, { FirebaseContext } from './components/Firebase';

// Google Analytics
ReactGA.initialize('UA-121847358-2');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>, 
  document.getElementById('root'));
registerServiceWorker();
