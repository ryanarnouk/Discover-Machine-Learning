import React, { Component } from 'react';

import '../styles/Signup.css';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() { 
    return ( 
      <div className="signupscreen"> 
        <div className="signup">
          <h1>Sign Up</h1>
        </div>
        <div className="border"></div>
        <div className="guest">
          <h1>Or:</h1>
          <p><Link to="/challenges/regression/1">Continue as a guest</Link></p>
          <p>Continueing as a guest will not save your progress and it is recommended that you sign up for an account to save your progress</p>
        </div>
      </div>
    );
  }
}
 
export default Signup;