import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import Lesson from './Lesson';
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Profile from './Profile';
import Challenges from './Challenges';
import Hint from './Hint';
import BugReport from './BugReport'
import ForgotPassword from './PasswordChange/ForgotPassword';


import Firebase, { FirebaseContext } from './Firebase';

//let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);

//let store = createStoreWithMiddleware(machineLearningIntroduction);

const user = localStorage.getItem('user');

if(user) {
  //store.dispatch({ type: AUTHENTICATED });
}


class App extends Component {
  state = {
    test: "this is a test state"
  }

  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <Switch>
            <Route exact path="/" component={() => {window.location.href="/landing-page/index.html"}} />
            <Route path="/challenges/:section/:id" render={(props) => (
              <Lesson {...this.props} {...props}/>
            )} />
            <Route path="/signup" component={(Signup)} />
            <Route path="/login" component={Login} />
            <Route path="/learnmore" component={() => {window.location.href="/landing-page/learnmore.html"}} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/challenges" component={() => <Challenges profilenavbar={true}/>} />
            <Route path="/privacypolicy" component={() => {window.location.href="/landing-page/privacypolicy.html"}} />
            <Route path="/faq" component={() => {window.location.href="/landing-page/faq.html"}} />
            <Route path="/hint/:section/:id" component={Hint} />
            <Route path="/bugreport" component={BugReport} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </FirebaseContext.Provider>
    );
  }
}

export default App;