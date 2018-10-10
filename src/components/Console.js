import React, { Component } from 'react';

class Console extends Component {
  render() { 
    return (  
      <div style={{width: '100%', backgroundColor: '#212121', height: 130, borderRadius: 10, marginTop: 20, marginBottom: 20}}>
        <code style={{fontSize: 17, padding: 14}}>{this.props.text}</code>
      </div>
    );
  }
}
 
export default Console;