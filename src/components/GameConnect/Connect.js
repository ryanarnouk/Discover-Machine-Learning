import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <p style={{color: 'white', fontFamily: 'Rubik', textAlign: 'center'}}>Teacher? Start a new game <Link to="startnew">here</Link></p>
        </div>
      </div>
    );
  }
}
 
export default Connect;