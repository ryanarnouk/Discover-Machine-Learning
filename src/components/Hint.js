import React, { Component } from 'react';
import JSONloader from './JSONloader';
import Parser from 'html-react-parser';
import ProfileNavbar from './ProfileNavbar';
import { Link } from 'react-router-dom';

class Hint extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessonNumber: this.props.match.params.id - 1,
    }
  }

  render() {
    if(JSONloader.challenges[this.state.lessonNumber].hints === undefined || JSONloader.challenges[this.state.lessonNumber].hints.length === 0) {
      return (<h1 style={{fontFamily: 'Rubik', textAlign: 'center'}}>No hints for this challenge</h1>)
    } else {
      return (  
        <div style={{fontFamily: 'Rubik'}}>
          <ProfileNavbar />
          <h1 style={{textAlign: "center"}}>{Parser(JSONloader.challenges[this.state.lessonNumber].name)} - Hints</h1>
          <div style={{margin: 20}}>
            {JSONloader.challenges[this.state.lessonNumber].hints.map((a, i) => {
              return (<div>
                <h2>Hint {i + 1}</h2>
                <hr size="30"></hr>
                <p>{Parser(a)}</p>
              </div>)
            })}
            <p style={{textAlign: 'center'}}>Found a bug? Submit bug reports <Link to="/bugreport" style={{color: 'dodgerblue'}}>here</Link></p>
          </div>
        </div>
      );
    }
  }
}
 
export default Hint;