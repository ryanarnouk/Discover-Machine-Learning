import React, { Component } from 'react';

import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { SignUpAction } from '../actions';

class Signup extends Component {
  submit = (values) => {
    console.log(values);
    this.props.SignUpAction(values, this.props.history);
  }

  render() { 
    const { handleSubmit } = this.props;
    return ( 
      <div className="signupscreen" style={{fontFamily: 'Rubik'}}> 
        <div className="signup">
          <h1>Sign Up</h1>
          <h3>It's free, and hardly takes a minute</h3>
          <form onSubmit={ handleSubmit(this.submit) } style={{fontFamily: 'Rubik'}}>
            <Field type="input" placeholder="Username" className="email" component="input" name="name" onChange={this.nameChange}/><br />
            <Field type="email" placeholder="Email" className="email" component="input" name="email" onChange={this.emailChange}/><br />
            <Field className="password" type="password" placeholder="Password" component="input" name="password" onChange={this.passwordChange}/><br />
            <input type="submit" value="Sign Up" className="submit"/> 
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
            <p><Link to="/challenges/regression/1" onClick={this.forceUpdate}>Continue as a guest</Link></p>
            <p style={{fontSize: 13}}>Continuing as a guest will not save your progress and it is recommended that you sign up for an account to save your progress</p>
          </div>
        </div>
      </div>
    );   
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

const reduxFormSignup = reduxForm({
  form: 'signup'
})(Signup);
 
export default connect(mapStateToProps, {SignUpAction})(reduxFormSignup);