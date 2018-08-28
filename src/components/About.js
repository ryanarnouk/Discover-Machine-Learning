import React, { Component } from 'react';
import ProfileNavbar from './ProfileNavbar';

class About extends Component {
  render() { 
    return (
      <div style={{fontSize: 16, fontFamily: 'roboto'}}>
        <ProfileNavbar style={{position: 'fixed'}}/>
        <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', height: '80vh'}}>
          <div style={{textAlign: 'center', width: '40vw'}}>
            Developed by Ryan Arnouk 2018<br/>
            Machine Learning Introduction is an app that uses block components to teach machine learning.<br/>
            <div style={{marginTop: 20}}>
              Version: 0.1<br />
              Last Updated: 2018-08-26
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;