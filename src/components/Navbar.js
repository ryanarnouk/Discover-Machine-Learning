import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../styles/App.css';
import FontAwesome from 'react-fontawesome';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  state = {
    isTop: true,
  };
  
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    var navClass = this.state.isTop ? 'is-top' : 'not-top';
    const { classes } = this.props;
    return ( 
      <div className={classes.root}>
        <AppBar position="static" style={{position: 'fixed'}}>
          <Toolbar>
            <Typography variant="title" className={classes.flex}>
              Machine Learning Introduction
            </Typography>
            <Button color="default" component={props => <Link to="/login" {...props}/>}>Login</Button>
            <Button component={props => <Link to="/signup" {...props}/>} style={{backgroundColor: '#2196f3', color: 'white'}}>Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: propTypes.object.isRequired,
};
 
export default withStyles(styles)(Navbar);