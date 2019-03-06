import React, { Component } from 'react';

import { FirebaseContext } from '../Firebase';
import { AuthUserContext } from '../Session';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if(authUser) {
            window.location.href = '/profile'
          }
        }
      )
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? null : <ComposedComponent {...this.props}/>}
        </AuthUserContext.Consumer>
      )
    }
  }

  const Auth = () => (
    <div>
      <FirebaseContext.Consumer>
        {firebase => <Authentication firebase={firebase}/>}
      </FirebaseContext.Consumer>
    </div>
  )

  return Auth;
}