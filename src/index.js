import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

import Firebase, { FirebaseContext } from './components/Firebase';

// Google Analytics
ReactGA.initialize('UA-121847358-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class Providers extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    );
  }
}

ReactDOM.render(
  <Providers />, 
  document.getElementById('root'));
registerServiceWorker();
