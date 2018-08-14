import React, { Component } from 'react';
import '../styles/Profile.css';
import ProfileNavbar from './ProfileNavbar';

class ChallengeBlock extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="challengeblock">
          <hr />
          <div style={{color: 'white', display: 'flex'}}>
            <p>This is a challenge test</p>
            <p style={{marginLeft: '65%'}}>September 20, 2018</p>
          </div>
        </div>
      </div>
    );
  }
}

class Profile extends Component {
  render() { 
    return ( 
      <div className="main">
        <ProfileNavbar />
        <div style={{textAlign: 'center'}}> 
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 className="profilepic">{localStorage.getItem('user_name').charAt(0).toUpperCase()}</h1>
          </div>
          <h1 className="name">{localStorage.getItem('user_name')}</h1>
        </div>
        <div style={{marginTop: 20}}>
          <div style={{color: 'white', display: 'flex', textAlign: 'center'}}>
            <h2>Challenge Name</h2>
            <h2 style={{marginLeft: '65%'}}>Date</h2>
          </div>
          <ChallengeBlock />
          <ChallengeBlock />
          <ChallengeBlock />
          <ChallengeBlock />
          <ChallengeBlock />
        </div>
      </div>  
    );
  }
}

export default Profile;