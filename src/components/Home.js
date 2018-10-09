// home landing page 
import React, { Component } from 'react';

import '../styles/Home.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import FontAwesome from 'react-fontawesome';
import Slider from 'react-slick';

class Testimonies extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <div className="testimonies">
              <div style={{color: 'white', fontFamily: 'roboto', width: '60%', padding: 26}}>
                <img src={require('../img/beginnerfriendlysvg.png')} alt="profile_img" style={{width: 80}}></img>
                <div>
                  <h1 style={{margin: 0}}>John Smith</h1>
                  <h3 style={{marginTop: 10}}>Vancouver, BC</h3>
                </div>
                <p>My students love machine-learning-introduction. As a teacher, it is great to introduce my students to new areas in a friendly, beginner way that appeals to them. My students enjoy doing all the problems and I highly recommend machine-learning-introduction</p>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonies">
              <div style={{color: 'white', fontFamily: 'roboto', width: '60%', padding: 26}}>
                <img src={require('../img/beginnerfriendlysvg.png')} alt="profile_img" style={{width: 80}}></img>
                <div>
                  <h1 style={{margin: 0}}>Jane Smith</h1>
                  <h3 style={{marginTop: 10}}>Vancouver, BC</h3>
                </div>
                <p>My students love machine-learning-introduction. As a teacher, it is great to introduce my students to new areas in a friendly, beginner way that appeals to them. My students enjoy doing all the problems and I highly recommend machine-learning-introduction</p>
              </div>
            </div>
          </div>
          <div>
            <div className="testimonies">
              <div style={{color: 'white', fontFamily: 'roboto', width: '60%', padding: 26}}>
                <img src={require('../img/beginnerfriendlysvg.png')} alt="profile_img" style={{width: 80}}></img>
                <div>
                  <h1 style={{margin: 0}}>John Doe</h1>
                  <h3 style={{marginTop: 10}}>Vancouver, BC</h3>
                </div>
                <p>My students love machine-learning-introduction. As a teacher, it is great to introduce my students to new areas in a friendly, beginner way that appeals to them. My students enjoy doing all the problems and I highly recommend machine-learning-introduction</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );  
  }
}

class Home extends Component {
  render() { 
    return ( 
      <div className="font">
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
          <img src={require('../img/phonemachinelearningintroduction.png')} style={{width: 330, zIndex: 0, marginTop: 300}}></img>
        </div> 
        <div className="introduction">
          <p className="intro" style={{margin: 0}}>Machine Learning Introduction is a beginner friendly introduction to the world of Machine Learning. Machine Learning powers many amazing things we take for granted today. Ever wonder how companies like YouTube and Instagram curate videos and images that suit what you like? Or how companies target ads to things that you like. That is done by using Machine Learning and this course offers begginers with no programming and math experience too be able to learn about Machine Learning and what it is, in an interactive build block editor, instead of typing traditional code. This offers an interactive editor that allows users to expirement with their models.</p>
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
          <p style={{margin: 0}}>Want more information? <Link to="/learnmore" style={{color: 'black'}}>Click here</Link> for more detailed curriculum details</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', color: 'white', backgroundColor: '#500F7F'}}>
          <Testimonies />
        </div>
        <Footer />
      </div>
    );
  }
}
 
export default Home;