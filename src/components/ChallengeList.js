import React, { Component } from 'react';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowDown from '@material-ui/icons/ArrowDropDown';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Circle from '@material-ui/icons/FiberManualRecord';
import LessonJSON from '../seed/challenges/regression/lesson.json';

class SubList extends Component {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer', marginLeft: 50}}>
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
    open: false
  };

  handleClick = () => {
    if(this.state.open === true) {
      this.setState({ open: false });
    } else if (this.state.open === false) {
      this.setState({ open: true});
    }
  }

  render() {
    LessonJSON.challenges.map((a) => {
      console.log(a.name);
    })
    const listItems = LessonJSON.challenges.map((a) => {
      <li><SubList text={a.name} done={true}/></li>
    })

    return ( 
      <div>
        <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={this.handleClick}>
          {this.state.open ? (
            <ArrowDown />
          ): (
            <ArrowRight />
          )}
          <li style={{fontFamily: 'roboto', fontSize: 20}}>{this.props.text}</li>
        </div>
        <div>
          {this.state.open ? (
            <ul style={{listStyleType: 'none', padding: 0, fontSize: 18}}>
              {LessonJSON.challenges.map((a) => {
                return [
                  <SubList text={a.name} done={true}/>
                ]
              })}
            </ul>
          ) : false}
        </div>
      </div>
    );
  }
}
 
export default ChallengeList;