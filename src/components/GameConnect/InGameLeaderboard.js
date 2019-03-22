import React, { Component } from 'react';
import { GameContext } from '../GameContext';
import firebase from 'firebase';

class User extends Component {
  render() {
    return (
      <div style={{padding: 10, borderRadius: '10px', backgroundColor: 'white', fontFamily: 'Rubik', margin: 20, background: 'rgb(255, 255, 255, 0.8)', display: 'flex'}}>
        <p>{this.props.username}</p>
        <p style={{right: '23%', position: 'absolute'}}>{this.props.score}$</p>
      </div>
    );
  }
}

class Leaderboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gamecode: this.props.gamecode,
      users: this.props.users
    };
  }

  componentDidMount() {
    // update when new user is added
    firebase.database().ref('games/' + `${this.state.gamecode}`).on('value', (snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val().users) {
          console.log(snapshot.val().users);
          this.setState({users: snapshot.val().users});
        } else {
          return 'no users'
        }
      } else {
        return 'game does not exist'
      }
    }) 
  }

  render() { 
    return (
      <div style={{display: 'flex'}}>
        <div style={{backgroundColor: '#0C7CE8', width: '100%'}}>
          <div style={{textAlign: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100%'}}>  
            <div>
              <h1 style={{color: 'white', fontFamily: 'Rubik', textAlign: 'center', margin: 0}}>Leaderboard</h1>
              {Object.keys(this.state.users).map((a, i) => {
                return (
                  <User key={i} username={a} score={this.state.users[a]}/>
                )
              })}
            </div>
            <button style={{fontFamily: 'Rubik', border: 'none', padding: '16px 40px', background: 'rgb(255, 255, 255, 0.6)', cursor: 'pointer', borderRadius: '10px'}}>End Game</button>
          </div>
        </div>
        <div style={{width: '23%', fontFamily: 'Rubik', backgroundColor: '#0DC8FF', color: 'white', textAlign: 'center', paddingTop: 20}}>
          <h1>
            <GameContext.Consumer>
              {(context) => context.gamecode}
            </GameContext.Consumer>
          </h1>
          <p>Game Code</p>
        </div>
      </div>
    );
  }
}
 
export default Leaderboard;