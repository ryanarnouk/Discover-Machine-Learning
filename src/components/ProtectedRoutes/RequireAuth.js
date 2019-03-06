import React, { Component } from 'react';

import { FirebaseContext } from '../Firebase';
import { AuthUserContext } from '../Session';
import { withRouter } from 'react-router-dom';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if(!authUser) {
            window.location.href = '/login';
          }
        },
      )
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => authUser ? <ComposedComponent {...this.props}/> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  const Auth = () => (
    <div>
      <FirebaseContext.Consumer>
        {firebase => <Authentication firebase={firebase}/>}
      </FirebaseContext.Consumer>
    </div>
  )

  return withRouter(Auth);
}