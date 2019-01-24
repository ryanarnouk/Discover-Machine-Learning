import React, { Component } from 'react';
import '../styles/Profile.css';
import ProfileNavbar from './ProfileNavbar';
import Challenges from './Challenges';
import { FirebaseContext } from './Firebase';

class Profile extends Component {
  componentWillMount() {
    // ideally this would load when user signs in instead of on profile
    this.props.firebase.getUserProgress().then(() => {
      this.forceUpdate();
    });
  }

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

const UserProfile = () => (
  <FirebaseContext.Consumer>
    {firebase => <Profile firebase={firebase}/>}
  </FirebaseContext.Consumer>
)

export default UserProfile;