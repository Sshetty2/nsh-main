import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: any) => ({
  root: {
    backgroundColor: theme.palette.common.white,

    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar,
    flexGrow: 1
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing.unit,
    flexGrow: 1
  },
  menuButton: {
    marginLeft: '-4px',
    marginRight: theme.spacing.unit * 2
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing.unit
  }
});

const App: React.FC = ({ classes }: any) => {
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(App);
