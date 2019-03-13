import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase, FirebaseContext } from '../Firebase';
import FontAwesome from 'react-fontawesome';
import { GameContext } from '../GameContext';
import WaitScreen from './WaitScreen';
import firebase from 'firebase';

class Error extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#CC0D00', borderRadius: 10, color: 'white', padding: 5, display: 'flex'}}>
        <p style={{textAlign: 'center'}}>{this.props.error} <FontAwesome name='times' onClick={this.props.onClick} style={{cursor: 'pointer'}}/></p>
      </div>
    );
  }
}

class Connect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamecode: '',
      error: null,
      waitscreen: false
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.firebase.JoinGame(this.state.gamecode).then((error) => {
      if (error) {
        this.setState({error})
      } else {
        this.setState({waitscreen: true});
      }

      // wait for change to playing
      firebase.database().ref('games/' + `${this.state.gamecode}`).on('child_changed', (snapshot) => {
        // game started
        // redirect to information page
        window.location.href = '/gameinfo';
      }) 
    });
  }

  onClick = () => {
    this.setState({error: null})
  }

  render() { 
    return (  
      <div>
        <GameContext.Provider value={this.state}>
          {this.state.waitscreen ? 
          <WaitScreen /> : (
            <div style={{width: '100%', height: '100vh', backgroundColor: '#0C7CE8', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div>
                <h1 style={{textAlign: 'center', color: 'white', fontFamily: 'Rubik'}}>Discover Machine Learning</h1>
                <form onSubmit={this.onSubmit}>
                  <input type="number" className="code" name="gamecode" placeholder="Game Code" onChange={this.onChange} value={this.state.gamecode} required/>
                  <input type="submit" className="gamecodesubmit" value="Connect"/>
                </form>
                <p style={{color: 'white', fontFamily: 'Rubik', textAlign: 'center'}}>Teacher? Start a new game <Link to="startnew">here</Link></p>
                {this.state.error ? (
                  <div>
                    <Error error={this.state.error} onClick={this.onClick}/>
                  </div>
                ) : false}
              </div>
            </div>)}
        </GameContext.Provider>
      </div>
    );
  }
}
 
export default withFirebase(Connect);