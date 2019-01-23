import React, { Component } from 'react';
import Firebase from '.';

const FirebaseContext = React.createContext(null);

// not using withFirebase in code for future
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} authenticated={true}/>}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;