import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signOutAction } from '../actions';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import '../styles/App.css';

const text = <button onClick={() => signOutAction()} className='logout'>Logout</button>;

class ProfileNavbar extends Component {
  render() { 
    return ( 
      <div style={{marginLeft: '80%'}}>
        <Tooltip
          placement="bottom"
          overlay={text}
          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
          >
            <Link to="/profile" style={{textDecoration: 'none'}} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}><p style={{color: 'red', margin: 13, cursor: 'pointer'}} className="my-account">My Account</p></Link>
        </Tooltip>
      </div>
    );
  }
 
}
 
export default ProfileNavbar;