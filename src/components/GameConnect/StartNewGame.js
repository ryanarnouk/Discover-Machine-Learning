import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { withFirebase, FirebaseContext } from '../Firebase';
import { GameContext }  from '../GameContext';
import InGameLeaderboard from './InGameLeaderboard';
import firebase from 'firebase';

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gamecode: this.props.gamecode,
      exists: true
    }
  }

  removeUser = () => {
    this.props.firebase.DeleteUser(this.state.gamecode,this.props.username);
    this.setState({exists: false});
  }

  render() {
    return (
      <div>
        {this.state.exists ? (
          <div style={{backgroundColor: 'white', background: 'rgb(255, 255, 255, 0.6)', color: 'black', fontFamily: 'Rubik', padding: 8, borderRadius: '8px'}}>
            {this.props.username}
            <FontAwesome name="times-circle-o" style={{cursor: 'pointer', float: 'right'}} onClick={this.removeUser}/>
          </div>) : false
        }
      </div>
    );
  }
}

class StartNewGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamecode: '',
      gamestart: false,
      users: null
    }
  }

  componentDidMount() {
    this.setState({gamecode: this.props.firebase.NewGame()});
    this.props.firebase.GetUsers(this.state.gamecode).then((a) => {
      this.setState({users: a});
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
    });
  }

  startgame = () => {
    this.props.firebase.StartGame(this.state.gamecode, () => {

    });
    this.setState({gamestart: true});
  }

  render() { 
    console.log(this.state.users)
    return (  
      <GameContext.Provider value={this.state}>
        {this.state.gamestart ? 
          <InGameLeaderboard />
        :
          <div style={{width: '100%', height: '100vh', backgroundColor: '#0C7CE8', fontFamily: 'Rubik'}}>
            <div style={{backgroundColor: '#0DC8FF', padding: 44}}>
              <h1 style={{color: 'white', margin: 0, textAlign: 'center', fontSize: '7em'}}><GameContext.Consumer>
                {(context) => context.gamecode}
              </GameContext.Consumer></h1>
              <p style={{color: 'white', textAlign: 'center', fontSize: '1.4em'}}>Type this game code in.</p>
            </div>
            <div style={{margin: 13, textAlign: 'center'}}>
              <div>
                {this.state.users ? (
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridGap: '1em'}}>
                  {Object.keys(this.state.users).map((a, i) => {
                    return (
                      <User key={i} username={a} gamecode={this.state.gamecode} firebase={this.props.firebase}/>
                    )
                  })}
                  </div>
                ) : <p style={{color: 'white'}}>No users connected. Share the game code to connect users.</p>}
              </div>
              <button style={{margin: '0 auto', border: 'none', padding: '16px 40px', background: 'rgb(255, 255, 255, 0.6)', cursor: 'pointer', borderRadius: '10px'}} onClick={this.startgame}>Start Game</button>
              <p style={{color: 'white', position: 'absolute', bottom: 0}}>31 students online</p>
            </div>
          </div> }
      </GameContext.Provider>
    );
  }
}
 
export default withFirebase(StartNewGame);