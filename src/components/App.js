import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import Lesson from './Lesson';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import About from './About';
import Profile from './Profile';
import Challenges from './Challenges';
import Hint from './Hint';
import BugReport from './BugReport'
import ForgotPassword from './PasswordChange/ForgotPassword';
import Menu from './GameConnect/Menu';

import RequireAuth from './ProtectedRoutes/RequireAuth';
import noRequireAuth from './ProtectedRoutes/noRequireAuth';

import { FirebaseContext } from './Firebase';
import { AuthUserContext } from './Session';
import Home from './Homepage/Home';

// game connect
import Connect from './GameConnect/Connect';
import StartNewGame from './GameConnect/StartNewGame';
import Leaderboard from './GameConnect/Leaderboard';

// quiz
import Quiz from './Quiz/Quiz';

const user = localStorage.getItem('user');

if(user) {
  //store.dispatch({ type: AUTHENTICATED });
}


class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    }
  }

  componentWillMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
      }
    )
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/challenges/:section/:id" render={(props) => (
              <Lesson {...this.props} {...props}/>
            )} />
            <Route path="/signup" component={noRequireAuth(Signup)} />
            <Route path="/login" component={noRequireAuth(Login)} />
            <Route path="/learnmore" component={() => {window.location.href="/landing-page/learnmore.html"}} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={RequireAuth(Profile)} />
            <Route path="/challenges" component={() => <Challenges profilenavbar={true}/>} />
            <Route path="/privacypolicy" component={() => {window.location.href="/landing-page/privacypolicy.html"}} />
            <Route path="/faq" component={() => {window.location.href="/landing-page/faq.html"}} />
            <Route path="/hint/:section/:id" component={Hint} />
            <Route path="/bugreport" component={BugReport} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/quiz" component={Quiz} />
            {/* Routes for Game connect with class */}
            <Route path="/menu" component={/*RequireAuth(*/Menu/*)*/} />
            <Route path="/connect" component={/*RequireAuth(*/Connect/*)*/} />
            <Route path="/startnew" component={/*RequireAuth(*/StartNewGame/*)*/} />
            <Route path="/leaderboard" component={/*RequireAuth(*/Leaderboard/*)*/} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </AuthUserContext.Provider>
    );
  }
}

const App = () => (
  <FirebaseContext.Consumer>
    {firebase => <Routes firebase={firebase}/>}
  </FirebaseContext.Consumer>
);

export default App;