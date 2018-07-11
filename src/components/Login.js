import React, { Component } from 'react';

import '../styles/Login.css'
import { Link } from 'react-router-dom';

class Login extends Component {
  render() { 
    return ( 
      <div className="loginscreen">
        <div>
          <h1>Login</h1>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <Link to="/challenges/regression/1">Continue as guest</Link>
        </div>
      </div>
    );
  }
}
 
export default Login;