import React, { Component } from 'react';

import { FirebaseContext } from './Firebase';

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
        <ComposedComponent />
      );
    }
  }

  const Auth = () => (
    <div>
      <FirebaseContext.Consumer>
        {firebase => <Authentication firebase={firebase} />}
      </FirebaseContext.Consumer>
    </div>
  )

  return Auth;
}