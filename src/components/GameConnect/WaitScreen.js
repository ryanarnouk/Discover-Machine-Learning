import React, { Component } from 'react';
import { GameContext } from '../GameContext';

class WaitScreen extends Component {
  render() { 
    return (  
      <div style={{width: '100%', height: '100vh', backgroundColor: '#0C7CE8', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'Rubik'}}>
        <div style={{textAlign: 'center'}}>
          <p style={{margin: 0}}>Game Code:</p>
          <h1 style={{margin: 0}}><GameContext.Consumer>
            {(context) => context.gamecode}
          </GameContext.Consumer></h1>
          <p>Waiting for game to start.</p>
        </div>
      </div>
    );
  }
}
 
export default WaitScreen;