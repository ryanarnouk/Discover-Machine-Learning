import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class GetStartedNow extends Component {
  state = {  }
  render() { 
    return (  
      <div className="getstarted">
        <h1>What Are You Waiting For?</h1>
        <p>Get Started Now!</p>
        <Button variant="contained" style={{width: '20%'}}>
          Sign Up
        </Button>
      </div>
    );
  }
}
 
export default GetStartedNow;