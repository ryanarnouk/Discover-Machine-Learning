import React, { Component } from 'react';

import '../styles/Login.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'

import { FirebaseContext } from './Firebase';
import { Authenticated, AuthenticationError } from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((res) => {
        this.setState({ ...INITIAL_STATE });
        //this.props.history.push('/challenges/introcoding/1');
        // here we want to push authenticated state
        Authenticated();
        console.log(res);
      })
      .catch(error => {
        this.setState({ error });
        AuthenticationError();
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = (values) => {
    console.log(values);
    this.props.signInAction(values, this.props.history);
  }

  componentDidMount() {
    localStorage.removeItem('message');
  }

  componentWillMount() {
    if(localStorage.getItem('message') === null) {
      this.setState({ errorPopup: false });
    } else {
      this.setState({ errorPopup: true });
    }
  }

  render() { 
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return ( 
      <div className="loginscreen" style={{fontFamily: 'Rubik'}}>
        <div className="login">
          {this.state.errorPopup ? (
            <div style={{backgroundColor: '#7F1614', padding: 16, display: 'flex'}}>
              <p style={{margin: 0}}>{localStorage.getItem('message')}</p>     
              <FontAwesome name="times" size="2x" style={{cursor: 'pointer', right: 0}} onClick={()=> this.setState({ errorPopup: false })}/>  
            </div>
          ) : false}
          <div style={{backgroundColor: 'white', color: 'black', padding: 20}}>
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
              <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email"
                className="email"
              />
              <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
                className="password"
              /><br />
              <button disabled={isInvalid} type="submit" className="submit">
                Sign In
              </button>
              {error && <p>{error.message}</p>}
            </form>
            <div>
              <h2>Or log in with:</h2>
              <div>
                <FontAwesome name="twitter" size="2x" style={{backgroundColor: '#1dcaff', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', width: 30}}/>
                <FontAwesome name="facebook" size="2x" style={{backgroundColor: '#3B5998', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}}/>
                <FontAwesome name="google" size="2x" style={{backgroundColor: '#DB4437', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}}/>
              </div>
            </div>
            <p><Link to="/forgotpassword">Forgot Password?</Link></p>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    );   
  }
}

const SignInPage = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <Login firebase={firebase}/>}
    </FirebaseContext.Consumer>
  </div>
)

export default SignInPage;