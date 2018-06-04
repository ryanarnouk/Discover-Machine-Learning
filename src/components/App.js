import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import NoMatch from './NoMatch';
import Lesson from './Lesson';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/challenges/:section/:id" component={Lesson} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
