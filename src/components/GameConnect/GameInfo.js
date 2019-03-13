import React, { Component } from 'react';

class GameInfo extends Component {
  render() { 
    return (  
      <div style={{backgroundColor: '#FFE97A', width: '100%', height: '100vh', fontFamily: 'Rubik'}}>
        <div style={{marginLeft: 10, marginRight: 10}}>
          <h1 style={{textAlign: 'center', margin: 0}}>Welcome!</h1>
          <div>
            <p>Start by going through and completing the lessons</p>
          </div>
          <div style={{position: 'absolute', right: 10}}>
            <p>Test your knowledge with the interactive quiz mode.</p>
          </div>
          <p>Compete for a spot on the leaderboard, each question you answer correctly will get you money.</p>
          <p>TODO: Add images for each step when finalized</p>
        </div>
        <div style={{textAlign: 'center'}}>
          <h3>Ready to get started learning?</h3>
          <button style={{backgroundColor: 'white', border: 'none', color: 'black', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', cursor: 'pointer', outline: 'none'}}>Start Learning!</button>
        </div>
      </div>
    );
  }
}
 
export default GameInfo;