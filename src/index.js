import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

import Firebase, { FirebaseContext } from './components/Firebase';
import { GameContext }  from './components/GameContext';

// Google Analytics
ReactGA.initialize('UA-121847358-2');
ReactGA.pageview(window.location.pathname + window.location.search);

class Providers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamecode: '123456'
    }
  }

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <FirebaseContext.Provider value={new Firebase()}>
          <App />
        </FirebaseContext.Provider>
      </GameContext.Provider>
    );
  }
}

ReactDOM.render(
  <Providers />, 
  document.getElementById('root'));
registerServiceWorker();
