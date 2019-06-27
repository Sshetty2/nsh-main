import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Header from './components/Header';
import Footer from './components/Footer';

import MainTopContainer from './components/MainTop';
import MainBottomContainer from './components/MainBottom';

//import Footer from './components/Footer';

import '../marketplace/index.css';

const MarketPlace: React.FC = ({ location, history }: any) => {
  console.log(location, history);
  return (
    <>
      <CssBaseline />
      <div className="body">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Header />
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
            <Footer />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MarketPlace;
