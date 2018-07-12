// home landing page 
import React, { Component } from 'react';

import '../styles/Home.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

class Home extends Component {
  render() { 
    return ( 
      <div>
        <Navbar/>
        <div className="home"> 
          <div>
            <h1>Machine Learning Introduction</h1>
            <p>Interactive code block based introduction to the world of Machine Learning</p>
            <div>
              <Link to="/signup"><button className="getstarted">Get Started</button></Link>
              <p>Already have an account? <Link to="/login" style={{color: 'white'}}>Login</Link></p>
            </div>
          </div>
        </div> 
        <div className="introduction">
          <p className="intro">Machine Learning Introduction is a beginner friendly introduction to the world of Machine Learning. Machine Learning powers many amazing things we take for granted today. Ever wonder how companies like YouTube and Instagram curate videos and images that suit what you like? Or how companies target ads to things that you like. That is done by using Machine Learning and this course offers begginers with no programming and math experience too be able to learn about Machine Learning and what it is, in an interactive build block editor, instead of typing traditional code. This offers an interactive editor that allows users to expirement with their models.</p>
          <div className="points">
            <div className="point">
              <img className="pointimage" src={require("../img/buildblocksgraphic.png")} alt="Build blocks graphic"/>
              <p className="pointparagraph">Interactive Build block editor</p>
            </div>
            <div className="point">
              <img className="pointimage" src={require("../img/beginnerfriendlysvg.png")} alt="beginner friendly" />
              <p className="pointparagraph" >Beginner friendly</p>
            </div>
            <div className="point">
              <img className="pointimage" src={require('../img/teachersvg.png')} alt="teacher" />
              <p className="pointparagraph">Classroom Friendly. Curriculum makes a great way to teach students about Machine Learning and Programming. The responsive design helps it run well on all school devices such as ipads</p>
            </div>
          </div>
          <button className="getstarted startlearningbutton">Start Learning Today!</button>
          <p>Want more information? <Link to="/learnmore" style={{color: 'black'}}>Click here</Link> for more detailed curriculum details</p>
        </div>
        <div className="testimonies">
          <p>testimonies</p>
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default Home;