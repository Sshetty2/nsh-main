import React, { Component } from 'react';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  content: {
    marginTop: '150px',
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    marginTop: '50px',
    maxWidth: '100%',
    width: '554px'
  }
});

class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={32}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">404: The page you are looking for isn’t here</Typography>
              <Typography variant="subtitle2">
                You either tried some shady route or you came here by mistake. Whichever it is, try
                using the navigation
              </Typography>
              <img alt="Under development" className={classes.image} src="/images/not_found.png" />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(NotFound);
