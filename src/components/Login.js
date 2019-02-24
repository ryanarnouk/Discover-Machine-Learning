import React, { Component } from 'react';

import '../styles/Login.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'

import { withFirebase, FirebaseContext } from './Firebase';

import { AuthUserContext } from './Session';

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
        window.location.href = '/menu';
        localStorage.setItem('user_name', res.user.displayName);
        localStorage.setItem('email', res.user.email);
        //localStorage.setItem('user', res.user);
      })
      .catch(error => {
        this.setState({ error });
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

  onGoogleSubmit = event => {
    this.props.firebase.doSignInWithGoogle().then(socialAuthUser => {
      this.setState({ error: null });
      localStorage.setItem('user_name', socialAuthUser.user.displayName);
      localStorage.setItem('email', socialAuthUser.user.email);
      //window.location.href = '/profile';
    }).catch(error => {
      this.setState({error});
    })

    event.preventDefault();
  }

  onFacebookSubmit = event => {
    this.props.firebase.doSignInWithFacebook().then(socialAuthUser => {
        this.setState({ error: null });
        localStorage.setItem('user_name', socialAuthUser.user.displayName);
        localStorage.setItem('email', socialAuthUser.user.email);
        window.location.href = '/profile';
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onTwitterSubmit = event => {
    this.props.firebase.doSignInWithTwitter().then(socialAuthUser => {
      this.setState({ error: null });
      localStorage.setItem('user_name', socialAuthUser.user.displayName);
      localStorage.setItem('email', socialAuthUser.user.email);
      window.location.href = '/profile';
    })
    .catch(error => {
      this.setState({ error });
    });

  event.preventDefault();
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
                <FontAwesome name="twitter" size="2x" style={{backgroundColor: '#1dcaff', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', width: 30}} onClick={this.onTwitterSubmit}/>
                <FontAwesome name="facebook" size="2x" style={{backgroundColor: '#3B5998', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}} onClick={this.onFacebookSubmit}/>
                <FontAwesome name="google" size="2x" style={{backgroundColor: '#DB4437', borderRadius: 90, padding: 5, color: 'white', cursor: 'pointer', marginLeft: 22, width: 30}} onClick={this.onGoogleSubmit}/>
              </div>
            </div>
            <p><Link to="/forgotpassword">Forgot Password?</Link></p>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            {/*<AuthUserContext.Consumer>
              {authUser => authUser ? <p>authenticated</p> : <p>no authenticated</p>}
            </AuthUserContext.Consumer>*/}
          </div>
        </div>
      </div>
    );   
  }
}

export default Login;