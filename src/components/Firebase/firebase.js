import app from 'firebase/app';
import 'firebase/auth';

// FIX CONFIG BACK TO OTHER APP WHEN DONE
var config = {
  apiKey: "AIzaSyBHKRha8FojiyLUXRczSMeViXUK_d9f2tY",
  authDomain: "discover-ml.firebaseapp.com",
  databaseURL: "https://discover-ml.firebaseio.com",
  projectId: "discover-ml",
  storageBucket: "discover-ml.appspot.com",
  messagingSenderId: "994317226207"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // authentication API
  
  doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

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