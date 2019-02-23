import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="menubutton" onClick={e => this.props.onClick(this.props.link)}>
        {this.props.button}
      </div>
    )
  }
}

class Menu extends Component {
  onClick = link => {
    window.location.href = link;
  }

  render() { 
    return (  
      <div style={{width: '100%', height: '100vh', backgroundColor: '#0C7CE8', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '42%'}}>
          <Button button="Learn" link="/challenges" onClick={this.onClick}/>
          <Button button="Connect to Game" link="/connect" onClick={this.onClick}/>
          <Button button="Profile" link="/profile" onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}
 
export default Menu;