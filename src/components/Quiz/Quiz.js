import React, { Component } from 'react';

class Option extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.color, padding: 80, borderRadius: 5, textAlign: 'center', fontSize: 20}}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{width: '100vw', height: '100vh', backgroundColor: '#BC00EB', fontFamily: 'Rubik'}}>
        <div style={{padding: 10, textAlign: 'center', color: 'white', backgroundColor: '#CA46EB'}}>
          <strong><p style={{margin: 0}}>Quiz Mode</p></strong>
          <h1>How does support vector machines work?</h1>
        </div>
        <div style={{color: 'white', listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '3em', margin: 20}}>
          <Option color="blue" text="Seperates plots between the data" /> 
          <Option color="orange" text="Seperates plots between the data" />  
          <Option color="green" text="Seperates plots between the data" />  
          <Option color="red" text="Seperates plots between the data" />
        </div>
      </div>
    );
  }
}

export default Quiz;