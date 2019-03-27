import React, { Component } from 'react';

class Quiz extends Component {
  render() { 
    return (  
      <div className="quizmode main-container">
        <div className="left-container">
        <div>
            <h1>Quiz Mode</h1>
            <p>Test your newfound knowledge with the interactive quiz mode and see how well you understand concepts.</p>
          </div>
        </div>
        <div className="right-container text-container">
          <img src="/img/landingpage/quizmodepage.png" style={{width: '80%'}}/>
        </div>
      </div>
    );
  }
}
 
export default Quiz;