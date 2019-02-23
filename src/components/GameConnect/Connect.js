import React, { Component } from 'react';

class Connect extends Component {
  render() { 
    return (  
      <div style={{width: '100%', height: '100vh', backgroundColor: '#0C7CE8', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
          <h1 style={{textAlign: 'center', color: 'white', fontFamily: 'Rubik'}}>Discover Machine Learning</h1>
          <form>
            <input type="number" className="code" name="code" placeholder="Game Code" required/>
            <input type="submit" className="gamecodesubmit" value="Connect"/>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Connect;