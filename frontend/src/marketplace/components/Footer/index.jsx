import React from 'react';
import Paper from '@material-ui/core/Paper';


import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import styles from './styles.tsx';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

function StickyFooter({ classes }) {
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <div style={{height:'5vh'}}>
          <Typography variant="body1">My sticky footer can be found here.</Typography>
        </div>
      </footer>
    </div>
  );
}

export default withStyles(styles)(StickyFooter);
