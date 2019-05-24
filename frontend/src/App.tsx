import React from 'react';

import AppBar from './components/AppBar';
import Grid from '@material-ui/core/Grid';
import Footer from './components/Footer';

const App: React.FC = ({ classes }: any) => {
  return (
    <>
      <AppBar />
      <Grid container spacing={8}>
        <Grid item sm={6} xl={3} xs={12}>
          <div>Sample Text</div>
        </Grid>
        <Grid item sm={6} xl={3} xs={12}>
          <div>Sample Text</div>
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <div>Sample Text</div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default App;
