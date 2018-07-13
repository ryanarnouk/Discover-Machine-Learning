import React, { Component } from 'react';

import '../styles/Login.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'
import axios from 'axios';

class Login extends Component {
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
    axios.post('http://localhost:3001/auth/login', `email=${this.state.email}&password=${this.state.password}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }, 
    }).then((res) => {
      console.log(this.state.email, this.state.password);
      localStorage.setItem('user', res.data.token);
      console.log(res);
      window.location.href = "/challenges/regression/1";
      console.log(res);
      console.log('worked');
    }).catch((error) => {
      console.log(error);
      console.log('didnt work')
    });
    event.preventDefault();
  }

  render() { 
    return ( 
      <div className="loginscreen"> 
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" className="email" value={this.state.email} onChange={this.emailChange}/><br />
            <input className="password" type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChange}/><br />
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