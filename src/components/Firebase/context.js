import React, { Component } from 'react';
import Firebase from '.';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <Firebase.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </Firebase.Consumer>
);

export default FirebaseContext;