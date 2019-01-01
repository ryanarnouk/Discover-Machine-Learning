import React, { Component } from 'react';

import '../styles/Login.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import '../styles/font-awesome-4.7.0/css/font-awesome.min.css'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signInAction } from '../actions';

class Login extends Component {
  state = {
    errorPopup: false
  }

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
    const { handleSubmit } = this.props; 

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