import React, { Component } from 'react';

class CodeBlockEditor extends Component {
  render() { 
    return (  
      <div>
        <div className="codeblockeditor main-container">
          <div className="left-container">
            <img src="/img/landingpage/codeblockspage.png" style={{width: '80%'}}/>
          </div>
          <div className="right-container text-container">
            <div>
              <h1>Code Block Editor</h1>
              <p>A simple, minimal code block editor allows for people with zero coding experience to feel right at home.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default CodeBlockEditor;