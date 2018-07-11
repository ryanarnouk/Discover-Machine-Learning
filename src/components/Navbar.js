import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() { 
    return ( 
      <div style={{padding: 10, display: 'flex', alignItems: 'center', position: 'fixed'}}>
        <h2><Link style={{textDecoration: 'none', color: 'black'}} to="/">Machine Learning Introduction</Link></h2>
        <Link to="/login" style={{textDecoration: 'none', color: 'black', position: 'fixed', right: '13vw'}}>Login</Link> 
        <Link to="/signup" style={{textDecoration: 'none', backgroundColor: '#4C85FF', padding : 10, borderRadius: 10, color: 'white', position: 'fixed', right: '5vw'}}>Sign Up</Link>
      </div>
    );
  }
}
 
export default Navbar;