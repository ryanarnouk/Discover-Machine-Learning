import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../styles/App.css';

class Navbar extends Component {
  state = {
    isTop: true
  };
  
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    var navClass = this.state.isTop ? 'is-top' : 'not-top';
    return ( 
      <div style={{padding: 10, display: 'flex', alignItems: 'center', position: 'fixed', width: '100%'}} className={navClass}>
        <h2><Link style={{textDecoration: 'none', color: 'black'}} to="/">Machine Learning Introduction</Link></h2>
        <div style={{display: 'flex', alignItems: 'center'}} ref="navbar">
          <Link to="/login" style={{textDecoration: 'none', color: 'black', position: 'fixed', right: '13%'}}>Login</Link> 
          <Link to="/signup" style={{textDecoration: 'none', backgroundColor: '#4C85FF', padding : 10, borderRadius: 10, color: 'white', position: 'fixed', right: '5%'}}>Sign Up</Link>
        </div>
      </div>
    );
  }
}
 
export default Navbar;