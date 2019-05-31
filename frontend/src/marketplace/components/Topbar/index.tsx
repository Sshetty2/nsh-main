import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignoutIcon from '@material-ui/icons/ExitToAppOutlined';

import styles from './styles';

function Topbar({ classes }: any) {
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h4">
          New School Heroes
        </Typography>

        <Typography className={classes.candidatesButton} variant="h5">
          <NavLink exact to="/dashboard">
            Candidates
          </NavLink>
        </Typography>

        <Typography className={classes.clientsButton} variant="h5">
          Clients
        </Typography>
        <IconButton className={classes.signOutButton}>
          <SignoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Topbar);
