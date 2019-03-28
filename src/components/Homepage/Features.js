import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <div style={{textAlign: 'center'}}>
          <div className="iconouter">
            <i className={`flaticon-${this.props.icon} icon`} ></i>
          </div>
          <h2>{this.props.feature}</h2>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class Features extends Component {
  render() { 
    return (  
      <div className="featureouter">
        <Feature feature="Interactive Build Block Editor" text="An interactive build block editor allows total beginners to learn using a lego-type idea" icon="lego"/>
        <Feature feature="Beginner Friendly" text="Total beginners can start and learn the fundementals of machine learning" icon="boy"/>
        <Feature feature="Classroom Friendly" text="The curriculum makes a great way to teach students about machine learning and programming. The responsive design helps it run well on all school devices, such as iPads" icon="student"/>
        <Feature feature="No Math Required" text="No mathematics knowledge required, great for total beginners" icon="calculator"/>
        <Feature feature="Free" text="Free and always free" icon="money"/>
        <Feature feature="Introduction to Programming" text="Introduction to the world of programming" icon="code"/>
      </div>
    );
  }
}
 
export default Features;