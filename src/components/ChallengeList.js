import React, { Component } from 'react';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowDown from '@material-ui/icons/ArrowDropDown';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Circle from '@material-ui/icons/FiberManualRecord';

class SubList extends Component {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {this.props.done ? (
          <CheckCircle />
        ) : (
          <Circle />
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
              <SubList text="Challenge 11" done={true}/>
              <SubList text="Challenge 11" done={false}/>
              <SubList text="Challenge 11" done={true}/>
              <SubList text="Challenge 11" done={false}/>
              <SubList text="Challenge 11" done={true}/>
              <SubList text="Challenge 11" done={false}/>
            </ul>
          ) : false}
        </div>
      </div>
    );
  }
}
 
export default ChallengeList;