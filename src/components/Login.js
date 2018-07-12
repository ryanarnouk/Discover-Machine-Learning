import React, { Component } from 'react';

import '../styles/Login.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'

class Login extends Component {
  render() { 
    return ( 
      <div className="loginscreen"> 
        <div className="login">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email" className="email"/><br />
            <input className="password" type="password" placeholder="Password" /><br />
            <input type="submit" value="Login" className="submit"/> 
          </form>
          <div>
            <h2>Or log in with:</h2>
            <div>
              <FontAwesome name="twitter" size="2x" style={{backgroundColor: '#1dcaff', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', width: 30}}/>
              <FontAwesome name="facebook" size="2x" style={{backgroundColor: '#3B5998', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}}/>
              <FontAwesome name="google" size="2x" style={{backgroundColor: '#DB4437', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}}/>
            </div>
          </div>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    );   
  }
}
 
export default Login;