import React, { Component } from 'react';
import '../styles/Profile.css';
import ProfileNavbar from './ProfileNavbar';
import Challenges from './Challenges';

class ChallengeBlock extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="challengeblock">
          <hr />
          <div style={{display: 'flex'}}>
            <p>{this.props.challengename}</p>
            <div style={{display: 'inline-block', position: 'absolute', right: 210}}>
              <p>{this.props.section}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Profile extends Component {
  profilepicture = () => {
    if(localStorage.getItem('user_name') !== null) {
      return (
        <h1 className="profilepic">{localStorage.getItem('user_name').charAt(0).toUpperCase()}</h1>
      )
    }
  }

  render() {
    return ( 
      <div className="main" style={{color: 'black', fontFamily: 'Rubik'}}>
        <ProfileNavbar />
        <div style={{textAlign: 'center'}}> 
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {this.profilepicture()}
          </div>
          <h1 className="name">{localStorage.getItem('user_name')}</h1>
        </div>
        <Challenges />
      </div>  
    );
  }
}

export default Profile;