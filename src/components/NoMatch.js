import React, { Component } from 'react';

class NoMatch extends Component {
  render() { 
    return ( 
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', fontFamily: 'Rubik'}}>
        <div style={{textAlign: 'center'}}>
          <h1 style={{fontSize: 60}}>404</h1>
          <h3>The page you requested was not found</h3>
        </div>
      </div>
    );
  }
}
 
export default NoMatch;