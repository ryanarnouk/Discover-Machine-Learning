import React, { Component } from 'react';
import '../styles/Challenges.css'
import ProfileNavbar from './ProfileNavbar';
import ChallengeList from './ChallengeList';

class Challenges extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="outer">
        <ProfileNavbar />
        <h2 style={{fontFamily: 'roboto'}}>Challenges</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ul className="list">
            <ChallengeList text="Intro to Programming"/>
            <ChallengeList text="Linear Regression"/>
            <ChallengeList text="Classification"/>
            <ChallengeList text="Deep Learning"/>
            <ChallengeList text="Reinforcement Learning"/>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default Challenges;