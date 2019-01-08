import app from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAS1awTM680LmsU5wXixVD9vBy0LgLn6dU",
  authDomain: "discover-machine-learning.firebaseapp.com",
  databaseURL: "https://discover-machine-learning.firebaseio.com",
  projectId: "discover-machine-learning",
  storageBucket: "discover-machine-learning.appspot.com",
  messagingSenderId: "565596260646"
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