import React, { Component } from 'react';
import '../styles/Profile.css';
import ProfileNavbar from './ProfileNavbar';
import Challenges from './Challenges';

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
          <h1 className="name" style={{color: 'black'}}>{localStorage.getItem('user_name')}</h1>
        </div>
        <Challenges />
      </div>  
    );
  }
}

export default Profile;