import React, { Component } from 'react';

class Block extends Component {
  render() {
    return (
      <div>
        <div className="block">
          <div style={{textAlign: 'center'}}>
            <div className="iconouter">
              <i className={`flaticon-${this.props.icon} icon-block`} ></i>
            </div>
            <h2>{this.props.header}</h2>
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

class WhyLearn extends Component {
  state = {  }
  render() { 
    return (  
      <div>
        <div style={{textAlign: 'center', backgroundColor: '#FEDCD2', color: '#DF744A', padding: 13}}>
          <h1>Why Learn Machine Learning?</h1>
          <p>One of the fastest growing areas in the tech sector.</p>
          <div className="blockouter">
            <Block header="Solve big problems" text="Machine learning can help detect cancer, drive cars autonomously and solve many of the problems that plague humanity." icon="car"/>
            <Block header="Advanced tasks" text="Computers can now help humans preform complex tasks faster and more efficient thanks to machine learning such as detect health problems." icon="circuit"/>
            <Block header="Data" text="90% of the world's data was generated in the last 2 years, more apps need to make sense of this data coming out." icon="chart" />
            <Block header="Impact every industry" text="There are huge opportunities with machine learning in healthcare, transportaion, communication, retail, and entertainment." icon="doctor"/>
            <Block header="Innovation" text="We are on the forefront of machine learning things like advanced speech, voice, and image recognition is becoming a reality." icon="question"/>
            <Block header="Learn about the main technology driving innovation" text="From self driving cars, text recognition, and more machine learning is becoming one of the biggest innovations in the 21st century." icon="artificial-intelligence"/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default WhyLearn;