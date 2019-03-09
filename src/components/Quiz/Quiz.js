import React, { Component } from 'react';
import QuizJSON from '../../seed/quiz/quiz.json';

class Option extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.color, padding: 80, borderRadius: 5, textAlign: 'center', fontSize: 20, cursor: 'pointer'}}>
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
          <h1>{QuizJSON.questions[0].question}</h1>
        </div>
        <div style={{color: 'white', listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '3em', margin: 20}}>
          {QuizJSON.questions[0].options.map((a, i) => {
            var colours = ["blue", "orange", "green", "red"];
            return (
              <Option color={colours[i]} text={a} key={i} />
            );
          })} 
        </div>
      </div>
    );
  }
}

export default Quiz;