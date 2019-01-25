import React, { Component } from 'react';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowDown from '@material-ui/icons/ArrowDropDown';
import CheckCircle from '@material-ui/icons/CheckCircle';
//import Circle from '@material-ui/icons/FiberManualRecord';
import Regression from '../seed/challenges/regression/lesson.json';
import Introcoding from '../seed/challenges/introcoding/lesson.json';
import Classification from '../seed/challenges/classification/lesson.json';
import Reinforcement from '../seed/challenges/reinforcementlearning/lesson.json';
import DeepLearning from '../seed/challenges/deeplearning/lesson.json';

class SubList extends Component {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginLeft: 50}} onClick={() => window.location.href = `/challenges/${this.props.section}/${this.props.data.number}`}>
        {this.props.done ? (
          <CheckCircle/>
        ) : (
          <CheckCircle style={{backgroundColor: 'black', borderRadius: 90, width: 20, height: 20}}/>
        )}
        <li style={{padding: 5}}>{this.props.text}</li>
      </div> 
    );
  }
}


class ChallengeList extends Component {
  state = {
    open: true
  };

  handleClick = () => {
    if(this.state.open === true) {
      this.setState({ open: false });
    } else if (this.state.open === false) {
      this.setState({ open: true});
    }
  }

  render() {
    return ( 
      <div>
        <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={this.handleClick}>
          {this.state.open ? (
            <ArrowDown />
          ): (
            <ArrowRight />
          )}
          <li style={{fontFamily: 'roboto', fontSize: 20}} id={this.props.id}>{this.props.text}</li>
        </div>
        <div>
          {this.state.open ? (
            <ul style={{listStyleType: 'none', padding: 0, fontSize: 18}}>
              {this.props.id === 0 ? Introcoding.challenges.map((a, i) => {
                return [
                  <SubList text={a.name} done={localStorage.getItem(`challengecomplete introcoding ${i}`)} data={a} key={i} section='introcoding'/>
                ]
              }): false}
              {this.props.id === 1 ? Regression.challenges.map((a, i) => {
                return [
                  <SubList text={a.name} done={localStorage.getItem(`challengecomplete regression ${i}`)} data={a} key={i} section='regression'/>
                ]
              }): false}
              {this.props.id === 2 ? Classification.challenges.map((a, i) => {
                return [
                  <SubList text={a.name} done={localStorage.getItem(`challengecomplete classification ${i}`)} data={a} key={i} section='classification'/>
                ]
              }): false}
              {this.props.id === 3 ? DeepLearning.challenges.map((a, i) => {
                return [
                  <SubList text={a.name} done={localStorage.getItem(`challengecomplete deeplearning ${i}`)} data={a} key={i} section='deeplearning'/>
                ]
              }): false}
              {this.props.id === 4 ? Reinforcement.challenges.map((a, i) => {
                return [
                  <SubList text={a.name} done={localStorage.getItem(`challengecomplete reinforcementlearning ${i}`)} data={a} key={i} section='reinforcementlearning'/>
                ]
              }): false}
            </ul>
          ) : false}
        </div>
      </div>
    );
  }
}
 
export default ChallengeList;