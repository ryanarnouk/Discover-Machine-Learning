import React, { Component } from 'react';

import '../styles/LearnMore.css';
import Footer from './Footer';
import Navbar from './Navbar';

class LearnMore extends Component {
  render() { 
    return (
      <div>
        <Navbar />
        <div className="learnmore">
          <p>Learn More</p>
        </div>
        <div style={{margin: 20}}>
          <p>Learn more about machine-learning introduction and how it could be implemented in classrooms to help students learn</p>
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default LearnMore;