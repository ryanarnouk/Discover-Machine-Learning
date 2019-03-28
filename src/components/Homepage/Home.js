import React, { Component } from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import CodeBlockEditor from './CodeBlockEditor';
import Classroom from './Classroom';
import Leaderboard from './Leaderboard';
import QuizMode from './QuizMode';
import Features from './Features';
import SimpleIntro from './SimpleIntro';
import WhyLearn from './WhyLearn';
import GetStartedNow from './GetStartedNow';
import Footer from './Footer';

import '../../styles/LandingPage.css';

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
        <Features />
        <WhyLearn />
        <GetStartedNow />
        <Footer />
      </div>
    );
  }
};
 
export default Home;