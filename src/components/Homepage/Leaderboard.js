import React, { Component } from 'react';

class Leaderboard extends Component {
  render() { 
    return (  
      <div className="leaderboard main-container">
        <div className="left-container">
          <img src="/img/landingpage/leaderboardpage.png" style={{width: '80%'}}/>
        </div>
        <div className="right-container text-container">
          <div>
            <h1>Leaderboard</h1>
            <p>Follow the top preformers in the classroom, and offer a interactive and rewarding feel to students.</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Leaderboard;