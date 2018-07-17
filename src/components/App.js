import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import machineLearningIntroduction from '../reducers';
import thunkMiddleware from 'redux-thunk';
import api from '../middleware/api';
import { AUTHENTICATED } from '../actions/index';
import Home from './Home';
import NoMatch from './NoMatch';
import Lesson from './Lesson';
import Signup from './Signup';
import Login from './Login';
import LearnMore from './LearnMore';
import About from './About';
import Profile from './Profile';

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
            <Route exact path="/" component={noRequireAuth(Home)} />
            <Route path="/challenges/:section/:id" component={Lesson} />
            <Route path="/signup" component={noRequireAuth(Signup)} />
            <Route path="/login" component={noRequireAuth(Login)} />
            <Route path="/learnmore" component={noRequireAuth(LearnMore)} />
            <Route path="/about" component={noRequireAuth(About)} />
            <Route path="/profile" component={requireAuth(Profile)} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
