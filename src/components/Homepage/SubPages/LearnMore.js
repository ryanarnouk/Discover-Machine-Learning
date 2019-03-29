import React, { Component } from 'react';
import SubpageTemplate from './SubPageTemplate';

class LearnMore extends Component {
  state = {  }
  render() { 
    return (
      <SubpageTemplate header="Learn More" text={<div>Discover Machine Learning is a great way to introduce the idea of programming and in specific machine learning to kids or people who aren't as familiar in the field, as it is one of the most growing areas in the technology space right now, at the forefront of self driving cars, and things of that sort. Learn about how those technologies work in a fun easy to use manner. Discover Machine Learing is also a great classroom companion. Students can get an idea about the exciting technologies behind machine learning in a fun interactive way. The responsive design of the app allows it to run on devices such as tablets or phones. Great for a classroom enviorenment. 
      <h1>FAQ</h1>
      <h3>Q: Why do you run ads?</h3>
      A: Websites are expensive, so we need ads to pay for domains, hosting and severs. Please consider turning off your adblocker to support me.
      
      
      <h3>Q: I am a teacher, can I get my students to work on Discover Machine Learning?</h3>
      A: Yes! Discover Machine Learning is great for the classroom enviorenment, and if you do not want students to start an account, they can simply continue and have their work saved on that particular device for next time. And if your students have a google account, they can sign up easily and get learning
      
      
      <h3>Q: What is Discover Machine Learning?</h3>
      A: Discover Machine Learning is an interactive build block app that teaches the fundamentals of machine learning to students and people who do not have math expierence or a technology background. It introduces concepts such as linear regression, classification, neural networks, and more. Technologies used to power new technologies such as self driving cars.
      
      <h1>About Me:</h1>
      My name is Ryan and I am an aspiring web developer. I love making apps and making technology to help people and introduce them to new things.
      
      You can check out more of my work on <a href="https://azbo400.github.io" target="_blank" rel="noopener noreferrer">my website here</a></div>}/>
    );
  }
}
 
export default LearnMore;