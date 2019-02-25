import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { withFirebase, FirebaseContext } from '../Firebase';

class User extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'white', background: 'rgb(255, 255, 255, 0.6)', color: 'black', fontFamily: 'Rubik', padding: 8, borderRadius: '8px'}}>
        {this.props.username}
        <FontAwesome name="times-circle-o" style={{cursor: 'pointer', float: 'right'}}/>
      </div>
    );
  }
}

class StartNewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamecode: ''
    }
  }

  componentWillMount() {
    this.setState({gamecode: this.props.firebase.NewGame()});
  }

  startgame = () => {
    this.props.firebase.StartGame(this.state.gamecode, function () {
      window.location.href = '/leaderboard';
    });
  }

  render() { 
    return (  
      <div style={{width: '100%', height: '100vh', backgroundColor: '#0C7CE8'}}>
        <div style={{backgroundColor: '#0DC8FF', padding: 44}}>
          <h1 style={{fontFamily: 'Rubik', color: 'white', margin: 0, textAlign: 'center', fontSize: '7em'}}>{this.state.gamecode}</h1>
          <p style={{fontFamily: 'Rubik', color: 'white', textAlign: 'center', fontSize: '1.4em'}}>Type this game code in.</p>
        </div>
        <div style={{margin: 13, textAlign: 'center'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridGap: '1em'}}>
            <User username="ryanarnouk" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
            <User username="azbo400" />
          </div>
          <button style={{margin: '0 auto', fontFamily: 'Rubik', border: 'none', padding: '16px 40px', background: 'rgb(255, 255, 255, 0.6)', cursor: 'pointer', borderRadius: '10px'}} onClick={this.startgame}>Start Game</button>
          <p style={{color: 'white', fontFamily: 'Rubik', position: 'absolute', bottom: 0}}>31 students online</p>
        </div>
      </div>
    );
  }
}
 
export default withFirebase(StartNewGame);