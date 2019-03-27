import React, { Component } from 'react';

class Classroom extends Component {
  render() { 
    return (  
      <div className="classroom main-container">
        <div className="left-container text-container">
          <div>
            <h1>Classroom</h1>
            <p>Create a game and connect to it to connect everyone in the classroom. Disover Machine Learning was built with the classroom environment in mind.</p>
          </div>
        </div>
        <div className="right-container">
          <img src="/img/landingpage/classroom.png" style={{width: '80%'}}/>
        </div>
      </div>
    );
  }
}
 
export default Classroom;