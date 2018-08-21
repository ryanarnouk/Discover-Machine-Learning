import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signOutAction } from '../actions';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import '../styles/App.css';
import Media from 'react-media';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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

class ProfileNavbar extends Component {
  state = {
    anchorEl: null,
    menu: false
  };

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
    const { anchorEl, menu } = this.state;
    const open = Boolean(anchorEl);
    console.log(menu);

    return ( 
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: '#424242'}}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={() => this.setState({ menu: true })}/>
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
                <MenuItem component={props => <Link to="/profile" {...props}/>}>Profile</MenuItem>
                <MenuItem onClick={() => signOutAction()}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ProfileNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(ProfileNavbar);