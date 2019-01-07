import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signOutAction } from '../actions';
import 'rc-tooltip/assets/bootstrap_white.css';
import '../styles/App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Help from '@material-ui/icons/Help';
import { FirebaseContext } from './Firebase';

const SignOut = ({ firebase }) => (
  <MenuItem onClick={firebase.doSignOut}>
    Sign Out
  </MenuItem>
);

const SignOutButton = () => (
  <FirebaseContext.Consumer>
    {firebase => <SignOut firebase={firebase}/>}
  </FirebaseContext.Consumer>
)

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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class ProfileNavbar extends Component {
  state = {
    anchorEl: null,
    menu: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      menu: open
    });
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() { 
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const sideList = (
      <div className={classes.list}>
        <ListItem button component={props => <Link to="/challenges" {...props}/>}>
          <ListItemText primary="Challenges" />
        </ListItem>
        <ListItem button component={props => <Link to="/about" {...props}/>}>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </div>
    );

    return ( 
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: '#424242'}}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}></Typography>
            <div>
              <IconButton 
                aria-owns={open ? 'menu-appbar': null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu 
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem component={props => <Link to="/profile" onClick={this.forceUpdate} {...props}/>}>Profile</MenuItem>
                <MenuItem onClick={() => signOutAction()}>Logout</MenuItem>
                <SignOutButton />
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.menu} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

ProfileNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(ProfileNavbar);