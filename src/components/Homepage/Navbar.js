import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    cursor: 'pointer', 
    margin: 17
  }
};

function Navbar (props) {
  const { classes } = props;
    return (  
      <div style={{position: 'fixed'}}>
        <AppBar position="fixed" color="default" className={classes.root}> 
          <Toolbar>
            <img src="/img/favicon.png" style={{width: '3%', marginRight: 20}} />
            <Typography variant="title" color="inherit" className={classes.grow} style={{cursor: 'pointer'}} onClick={() => window.location.href = "/"}>
              Discover Machine Learning
            </Typography>
            <Typography color="inherit" className={classes.button} onClick={() => window.location.href = "/about"}>About</Typography>
            <Typography color="inherit" className={classes.button} onClick={() => window.location.href = "/learnmore"}>Learn More</Typography>
            <Typography color="inherit" className={classes.button} onClick={() => window.location.href = "/privacypolicy"}>Privacy Policy</Typography>
            <Typography color="inherit" className={classes.button} onClick={() => window.location.href = "/login"}>Login</Typography>
            <Button variant="contained" color="primary" onClick={() => window.location.href = "/signup"}>Sign Up</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default withStyles(styles)(Navbar);