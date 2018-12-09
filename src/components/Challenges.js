import React, { Component } from 'react';
import '../styles/Challenges.css'
import ProfileNavbar from './ProfileNavbar';
import ChallengeList from './ChallengeList';
import GoogleAds from './GoogleAds'

class Challenges extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="outer" style={{fontFamily: 'Rubik'}}>
        {this.props.profilenavbar ? (
          <ProfileNavbar />
        ) : false}
        <h2 style={{fontFamily: 'Rubik'}}>Challenges</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ul className="list">
            <ChallengeList text="Intro to Programming" id={0}/>
            <ChallengeList text="Linear Regression" id={1}/>
            <ChallengeList text="Classification" id={2}/>
            <ChallengeList text="Deep Learning" id={3}/>
            <ChallengeList text="Reinforcement Learning" id={4}/>
          </ul>
        </div>
        <GoogleAds />
      </div>
    );
  }
}
 
export default Challenges;