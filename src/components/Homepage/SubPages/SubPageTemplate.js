import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import '../../../styles/LandingPage.css';

class SubpageTemplate extends Component {
  state = {  }
  render() { 
    return (  
      <div>
        <Navbar />
        <div className="subpageheader">
          <h1 style={{marginTop: '5%'}}>{this.props.header}</h1>
        </div>
        <div style={{margin: 30}}>
          {this.props.text}
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default SubpageTemplate;