import { slide as  Menu } from 'react-burger-menu';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Media from 'react-media';

class Map extends Component {
  render() { 
    return ( 
      <div>
        <Media query={{maxWidth: 600}}>
          {matches => 
            matches ? (
              <Menu width={'100%'}>
                <Link id="Intro to Programming" className="menu-item" to="/">Intro to Programming</Link>
                <Link id="Intro to Machine Learning" className="menu-item" to="/">Intro to Machine Learning</Link>
                <Link id="Regression" className="menu-item" to="/">Linear Regression</Link>
                <Link id="Classification" className="menu-item" to="/">Classification</Link>
                <Link id="Neural Networks" className="menu-item" to="/">Neural Networks</Link>
                <Link id="Reinforcement Learning" className="menu-item" to="/">Reinforcement Learning</Link>
              </Menu>
            ) : (
              <Menu width={'30%'}>
                <Link id="Intro to Programming" className="menu-item" to="/">Intro to Programming</Link>
                <Link id="Intro to Machine Learning" className="menu-item" to="/">Intro to Machine Learning</Link>
                <Link id="Regression" className="menu-item" to="/">Linear Regression</Link>
                <Link id="Classification" className="menu-item" to="/">Classification</Link>
                <Link id="Neural Networks" className="menu-item" to="/">Neural Networks</Link>
                <Link id="Reinforcement Learning" className="menu-item" to="/">Reinforcement Learning</Link>
              </Menu>
            )
          }
        </Media>
      </div>
    );
  }
}
 
export default Map;