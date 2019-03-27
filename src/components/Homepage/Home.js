import React, { Component } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import CodeBlockEditor from './CodeBlockEditor';
import Classroom from './Classroom';
import Leaderboard from './Leaderboard';
import QuizMode from './QuizMode';

import '../../styles/LandingPage.css';
import SimpleIntro from './SimpleIntro';

class Home extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Landing />
        <SimpleIntro />
        <CodeBlockEditor />
        <Classroom />
        <Leaderboard />
        <QuizMode />
      </div>
    );
  }
};
 
export default Home;