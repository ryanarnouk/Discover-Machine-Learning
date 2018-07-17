import React, { Component } from 'react';

import '../styles/Login.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signInAction } from '../actions';

class Login extends Component {
  submit = (values) => {
    console.log(values);
    this.props.signInAction(values, this.props.history);
  }

  render() { 
    const { handleSubmit } = this.props; 
    return ( 
      <div className="loginscreen"> 
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field type="email" placeholder="Email" className="email" component="input" name="email" onChange={this.emailChange}/><br />
            <Field className="password" type="password" placeholder="Password" component="input" name="password" onChange={this.passwordChange}/><br />
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

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
  form: 'signin'
})(Login);
 
export default connect(mapStateToProps, {signInAction})(reduxFormSignin);