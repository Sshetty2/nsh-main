import React, { Component } from 'react';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  iframe: {
    width: '100%',
    minHeight: '600px',
    border: 0
  }
});

class Icons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
          <iframe
            className={classes.iframe}
            src="https://material.io/tools/icons/?icon=accessibility&style=outline"
            title="Material Design icons"
          />
        </div>
      </DashboardLayout>
    );
  }
}

export default withStyles(styles)(Icons);
