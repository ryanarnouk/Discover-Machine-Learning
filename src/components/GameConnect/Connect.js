import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase, FirebaseContext } from '../Firebase';
import FontAwesome from 'react-fontawesome';

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
      error: null
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.firebase.JoinGame(this.state.gamecode).then((error) => {
      this.setState({error})
    });
  }

  onClick = () => {
    this.setState({error: null})
  }

  render() { 
    return (  
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
      </div>
    );
  }
}
 
export default withFirebase(Connect);