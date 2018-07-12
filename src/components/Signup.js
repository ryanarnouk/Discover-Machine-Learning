import React, { Component } from 'react';

import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'

class Signup extends Component {
  render() { 
    return ( 
      <div className="signupscreen"> 
        <div className="signup">
          <h1>Sign Up</h1>
          <h3>It's free, and hardly takes a minute</h3>
          <form>
            <input type="email" placeholder="Email" className="email"/><br />
            <input className="password" type="password" placeholder="Password" /><br />
            <input type="submit" value="Sign Up" className="submit"/> 
            <p style={{fontSize: 13}}>By creating an account you agree to our <Link to="#" style={{color: 'dodgerblue'}}>Terms & Privacy</Link></p>
          </form>
          <div>
            <h2>Or sign up with:</h2>
            <div>
            <FontAwesome name="twitter" size="2x" style={{backgroundColor: '#1dcaff', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', width: 30}}/>
            <FontAwesome name="facebook" size="2x" style={{backgroundColor: '#3B5998', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}}/>
            <FontAwesome name="google" size="2x" style={{backgroundColor: '#DB4437', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}}/>
            </div>
          </div>
          <div>
            <p><Link to="/challenges/regression/1">Continue as a guest</Link></p>
            <p style={{fontSize: 13}}>Continueing as a guest will not save your progress and it is recommended that you sign up for an account to save your progress</p>
          </div>
        </div>
      </div>
    );   
  }
}
 
export default Signup;