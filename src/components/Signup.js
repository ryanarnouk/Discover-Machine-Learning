import React, { Component } from 'react';

import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    // submit the signup form
    axios.post('http://localhost:3001/auth/signup', `name=${this.state.email}$email=${this.state.password}`, {
      'Content-Type': 'application/x-www-form-urlencoded'
    }).then((res) => {
      localStorage.setItem('user', res.data.token);
      console.log(res);
    }).catch((err) => {
      console.log(err.response)l
    });
    event.preventDefault();
  }

  render() { 
    return ( 
      <div className="signupscreen"> 
        <div className="signup">
          <h1>Sign Up</h1>
          <h3>It's free, and hardly takes a minute</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" className="email" value={this.state.email} onChange={this.emailChange}/><br />
            <input className="password" type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChange}/><br />
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
            <p>Already have an account? <Link to="/login">Login</Link></p>
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