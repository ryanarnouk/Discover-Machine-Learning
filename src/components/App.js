import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import NoMatch from './NoMatch';
import Lesson from './Lesson';
import Signup from './Signup';
import Login from './Login';
import LearnMore from './LearnMore';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/challenges/:section/:id" component={Lesson} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/learnmore" component={LearnMore} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
