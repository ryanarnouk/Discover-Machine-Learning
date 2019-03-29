import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
  render() { 
    return (  
      <div className="footer" style={{display: 'flex'}}>
        <div style={{flex: 1}}>
          <h3>Developed by Ryan Arnouk</h3>
          <p>Connect with me on social media</p>
          <a href="https://twitter.com/ryanarnoukk" target="_blank" rel="noopener noreferrer"><FontAwesome name="twitter" size="2x" className="socialicon"/></a>
          <a href="https://github.com/Azbo400/" target="_blank" rel="noopener noreferrer"><FontAwesome name="github" size="2x" className="socialicon"/></a>
          <a href="https://www.linkedin.com/in/ryan-arnouk-6057a717a/"><FontAwesome name="linkedin" size="2x" className="socialicon"/></a>
        </div>
        <div style={{flex: 1}}>
          <h3>Navigational</h3>
          <ul>
            <li><a href="/" className="aelement">Home</a></li>
            <li><a href="/about" className="aelement">About</a></li>
            <li><a href="/learnmore" className="aelement">Learn More</a></li>
            <li><a href="/privacypolicy" className="aelement">Privacy Policy</a></li>
            <li><a href="/login" className="aelement">Login</a></li>
            <li><a href="/signup" className="aelement">Sign Up</a></li>
          </ul>
        </div>
        <div style={{flex: 1}}>
          <h3>Contact</h3>
          <ul>
            <li>ryan.j.arnouk@gmail.com</li>
            <li><a href="https://azbo400.github.io" target="_blank" className="aelement" rel="noopener noreferrer">My Website</a></li>
          </ul>
        </div>  
      </div>
    );
  }
}
 
export default Footer;