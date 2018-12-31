import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import machineLearningIntroduction from '../reducers';
import thunkMiddleware from 'redux-thunk';
import api from '../middleware/api';
import { AUTHENTICATED } from '../actions/index';
import NoMatch from './NoMatch';
import Lesson from './Lesson';
import Signup from './Signup';
import Login from './Login';
import About from './About';
import Profile from './Profile';
import Challenges from './Challenges';
import Hint from './Hint';
import BugReport from './BugReport'

import requireAuth from './RequireAuth';
import noRequireAuth from './NoRequireAuth';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);

let store = createStoreWithMiddleware(machineLearningIntroduction);

const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: AUTHENTICATED });
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={noRequireAuth(() => {window.location.href="/landing-page/index.html"})} />
            <Route path="/challenges/:section/:id" render={(props) => (
              <Lesson {...this.props} {...props}/>
            )} />
            <Route path="/signup" component={noRequireAuth(Signup)} />
            <Route path="/login" component={noRequireAuth(Login)} />
            <Route path="/learnmore" component={() => {window.location.href="/landing-page/learnmore.html"}} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={requireAuth(Profile)} />
            <Route path="/challenges" component={() => <Challenges profilenavbar={true}/>} />
            <Route path="/privacypolicy" component={noRequireAuth(() => {window.location.href="/landing-page/privacypolicy.html"})} />
            <Route path="/faq" component={noRequireAuth(() => {window.location.href="/landing-page/faq.html"})} />
            <Route path="/hint/:section/:id" component={Hint} />
            <Route path="/bugreport" component={BugReport} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;