import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import AppBar from './components/AppBar';

import MainTopContainer from './components/MainTop';
import MainBottomContainer from './components/MainBottom';

import Card from './components/Card';
//import Footer from './components/Footer';

import pic from './assets/pic.jpg';

const App: React.FC = ({ classes }: any) => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid item xs={12}>
          <MainTopContainer />
        </Grid>
        <Grid item xs={12}>
          <div>Filter Container</div>
        </Grid>
        <Grid item xs={12}>
          <MainBottomContainer />
        </Grid>
        <Grid item xs={12}>
          <div>Footer</div>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
