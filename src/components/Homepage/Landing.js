import React, { Component } from 'react';

class Landing extends Component {
  render() { 
    return (  
      <div className="landing main-container">
        <div className="left-container-landing">
          <div style={{width: '100%'}}>
            <h1>Discover Machine <br/>Learning</h1>
            <p>A beginner friendly introduction to machine learning with an interactive build block editor.</p>
          </div>
        </div>
        <div className="right-container-landing">
          <img src="/img/landingpage/homepagebackground.png" style={{width: '100%'}}/>
        </div>
      </div>
    );
  }
}
 
export default Landing;