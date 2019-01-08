import React, { Component } from 'react';

import '../styles/Signup.css';
import { Link, withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'

import { withFirebase, FirebaseContext } from './Firebase';

const SignUpPage = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/challenges/introcoding/1');
      }).catch(err => {
        this.setState({ err });
      });

    this.props.firebase.onAuthStateChanged(username);

    event.preventDefault();
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() { 
    const {
      username, 
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return ( 
      <div className="signupscreen" style={{fontFamily: 'Rubik'}}>
        <div className="signup">
          <h1>Sign Up</h1>
          <h3>It's free, and hardly takes a minute</h3>
          <form onSubmit={this.onSubmit} style={{fontFamily: 'Rubik'}}>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Username"
              className='email'
            />
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email"
              className='email'
            />
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              className='password'
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              className='password'
            /><br />
            <button type="submit"className="submit" disabled={isInvalid}>Sign Up</button>
            {error && <p>{error.message}</p>}
            <p style={{fontSize: 13}}>By creating an account you agree to our <Link to="/privacypolicy" style={{color: 'dodgerblue'}}>Terms & Privacy</Link></p>
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
            <p><Link to="/challenges/introcoding/1" onClick={this.forceUpdate}>Continue as a guest</Link></p>
            <p style={{fontSize: 13}}>Continuing as a guest will not save your progress and it is recommended that you sign up for an account to save your progress</p>
          </div>
        </div>
      </div>
    );   
  }
}

export default withRouter(SignUpPage);