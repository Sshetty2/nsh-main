import React, { Component } from 'react';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Grid from '@material-ui/core/Grid';

// Shared layouts
import DashboardLayout from '../../layouts/Dashboard';

// Custom components
import Budget from './components/Budget';
import Users from './components/Users';
import Progress from './components/Progress';
// import Profit from './components/Profit';
// import SalesChart from './components/SalesChart';
// import DevicesChart from './components/DevicesChart';
import ProductList from './components/ProductList';
// import OrdersTable from './components/OrdersTable';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid container spacing={32}>
            <Grid item sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item sm={6} xl={3} xs={12}>
              <Users />
            </Grid>
            <Grid item sm={6} xl={3} xs={12}>
              <Progress />
            </Grid>
            <Grid item sm={6} xl={3} xs={12}>
              {/* <Profit /> */}
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              {/* <SalesChart className={classes.item} /> */}
            </Grid>
            <Grid item lg={4} md={12} xl={3} xs={12}>
              {/* <DevicesChart className={classes.item} /> */}
            </Grid>
            <Grid item lg={4} md={12} xl={3} xs={12}>
              <ProductList className={classes.item} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              {/* <OrdersTable className={classes.item} /> */}
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

export default withStyles(styles)(Dashboard);
