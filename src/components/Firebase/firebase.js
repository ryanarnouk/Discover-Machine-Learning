import app from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase';
import qs from 'qs';
import regression from '../../seed/challenges/regression/lesson.json';
import classification from '../../seed/challenges/classification/lesson.json';
import introcoding from '../../seed/challenges/introcoding/lesson.json';
import deeplearning from '../../seed/challenges/deeplearning/lesson.json';
import reinforcementlearning from '../../seed/challenges/reinforcementlearning/lesson.json';
import { NewGame, JoinGame, EndGame, StartGame, DeleteUser, GetUsers, onNewUser, updateMoney } from './game';

// FIX CONFIG BACK TO OTHER APP WHEN DONE
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

app.initializeApp(config);

class Firebase {
  constructor() {
    this.auth = app.auth();

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // authentication API
  
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => {
    var x = {
      introcoding: [

      ], 
      regression: [

      ],
      classification: [

      ],
      deeplearning: [

      ], 
      reinforcementlearning: [

      ]
    }

    for(var i in introcoding.challenges) {
      x.introcoding.push(Boolean(localStorage.getItem('challengecomplete introcoding ' + i)))
    }
    for(var a in regression.challenges) {
      x.regression.push(Boolean(localStorage.getItem('challengecomplete regression ' + a)))
    }
    for(var b in classification.challenges) {
      x.classification.push(Boolean(localStorage.getItem('challengecomplete classification ' + b)))
    }
    for(var c in deeplearning.challenges) {
      x.deeplearning.push(Boolean(localStorage.getItem('challengecomplete deeplearning ' + c)))
    }
    for(var d in reinforcementlearning.challenges) {
      x.reinforcementlearning.push(Boolean(localStorage.getItem('challengecomplete reinforcement ' + d)))
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref('users/' + user.uid).set({
          progress: x
        }).then(() => {
          this.auth.signOut();
        });
      }
    });
    console.log(x)

    // we want to clear localstorage but not xml code for workspace. So this code clears everything but the localstorage elements containing workspace things
    var nonworkspacelocalstorage = []
    for(var i = 0; i < localStorage.length; i++) {
      //console.log(localStorage.key(i).match(/workspace/g));
      if(!localStorage.key(i).match(/workspace/g)) {
        nonworkspacelocalstorage.push(localStorage.key(i))
      }
    }

    // loop backwards to delete all the items
    for(var a = nonworkspacelocalstorage.length-1; a >= 0; a--) {
      localStorage.removeItem(nonworkspacelocalstorage[a])
      //console.log(nonworkspacelocalstorage[a])
    }
  }

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => 
    this.auth.currentUser.updatePassword(password);

  onAuthStateChanged = (username) => {
    this.auth.onAuthStateChanged((user) => {
      user.updateProfile({
        displayName: username
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    });
  }

  getUserProgress = () => {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId + '/progress').once('value').then((snapshot) => {
      var x = snapshot.val();
      console.log(x)
      for(var u in x) {
        for(var i=0; i < x[u].length; i++) {
          if(x[u][i] === true) {
            console.log(`challengecomplete ${u} ${i}`)
            localStorage.setItem(`challengecomplete ${u} ${i}`, true)
          }
        }
      }
    });
  }

  doSignInWithGoogle = () => 
    this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  //--------------------- game connect code --------------
  NewGame = () => NewGame()
  JoinGame = (a) => JoinGame(a)
  EndGame = (a) => EndGame(a)
  StartGame = (a, callback) => StartGame(a, callback)
  GetUsers = (a) =>  GetUsers(a);

  //event listeners
  onNewUser = (a) => onNewUser(a);

  // update users money
  updateMoney = (username, money, gameid) => updateMoney(username, money, gameid);
  // delete the user from the game 
  DeleteUser = (gameid, username) => DeleteUser(gameid, username);
}

export default Firebase;