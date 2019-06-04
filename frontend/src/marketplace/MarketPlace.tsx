import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Topbar from './components/Topbar';

import MainTopContainer from './components/MainTop';
import MainBottomContainer from './components/MainBottom';

//import Footer from './components/Footer';

const MarketPlace: React.FC = ({ location, history }: any) => {
  console.log(location, history);
  return (
    <>
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Topbar />
        </Grid>
        <Grid item xs={12}>
          <MainTopContainer />
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: '9vh', textAlign: 'center' }}>Filter Container</div>
        </Grid>
        <Grid item xs={12}>
          <MainBottomContainer />
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: '5vh', textAlign: 'center' }}>Footer</div>
        </Grid>
      </Grid>
    </>
  );
};

export default MarketPlace;
