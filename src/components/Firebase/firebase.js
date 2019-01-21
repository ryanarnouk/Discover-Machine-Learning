import app from 'firebase/app';
import 'firebase/auth';
import firebase from 'firebase';
import qs from 'qs';
import regression from '../../seed/challenges/regression/lesson.json';
import classification from '../../seed/challenges/classification/lesson.json';
import introcoding from '../../seed/challenges/introcoding/lesson.json';
import deeplearning from '../../seed/challenges/deeplearning/lesson.json';
import reinforcementlearning from '../../seed/challenges/reinforcementlearning/lesson.json';

// FIX CONFIG BACK TO OTHER APP WHEN DONE
var config = {
  apiKey: "AIzaSyBHKRha8FojiyLUXRczSMeViXUK_d9f2tY",
  authDomain: "discover-ml.firebaseapp.com",
  databaseURL: "https://discover-ml.firebaseio.com",
  projectId: "discover-ml",
  storageBucket: "discover-ml.appspot.com",
  messagingSenderId: "994317226207"
};

app.initializeApp(config);

class Firebase {
  constructor() {
    this.auth = app.auth();
  }

  // authentication API
  
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
    // need to get user progress
  }
  
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
}

export default Firebase;