import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../styles/App.css';
import Media from 'react-media';
import FontAwesome from 'react-fontawesome';

class Navbar extends Component {
  state = {
    isTop: true,
    menu: false
  };
  
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  handleClick = () => {
    if(this.state.menu === false) {
      this.setState({ menu: true });
    } else {
      this.setState({ menu: false });
    }
  }

  render() {
    var navClass = this.state.isTop ? 'is-top' : 'not-top';
    return ( 
      <div>
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
              <div>
                <div style={{padding: 10, display: 'flex', alignItems: 'center', position: 'fixed', width: '100%', top: 0}} className={navClass}>
                  <h2><Link style={{textDecoration: 'none', color: 'black'}} to="/">Machine Learning Introduction</Link></h2>
                  <div style={{display: 'flex', alignItems: 'center'}} ref="navbar">
                    <FontAwesome name="bars" size="2x" style={{cursor: 'pointer', position: 'absolute', right: 30}} onClick={this.handleClick}/>
                  </div>
                </div>
                {this.state.menu ? (
                  <div style={{textAlign: 'center', margin: 60}}>
                    <Link to="/login" style={{textDecoration: 'none', color: 'black', cursor: 'pointer', padding: 10, marginBottom: 30}}>Login</Link> <br/>
                    <Link to="/signup" style={{textDecoration: 'none', color: 'black', cursor: 'pointer', backgroundColor: '#4C85FF', padding: 10, borderRadius: 10, margin: 30}}>Sign Up</Link>
                  </div>
                ) : false}
              </div>
            ) : (  
              <div style={{padding: 10, display: 'flex', alignItems: 'center', position: 'fixed', width: '100%'}} className={navClass}>
                <h2><Link style={{textDecoration: 'none', color: 'black'}} to="/">Machine Learning Introduction</Link></h2>
                <div style={{display: 'flex', alignItems: 'center'}} ref="navbar">
                  <Link to="/login" style={{textDecoration: 'none', color: 'black', position: 'fixed', right: '13%'}}>Login</Link> 
                  <Link to="/signup" style={{textDecoration: 'none', backgroundColor: '#4C85FF', padding : 10, borderRadius: 10, color: 'white', position: 'fixed', right: '5%'}}>Sign Up</Link>
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}
 
export default Navbar;