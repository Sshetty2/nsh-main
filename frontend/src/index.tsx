import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
// import MarketPlace from './marketplace/MarketPlace';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { rootReducer } from './reducers';

import dashboardRoutes from './dashboard/Routes';
import Loader from './Loader';

const MarketPlace = lazy(() => {
  return Promise.all([
    import('./marketplace/MarketPlace'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ]).then(([moduleExports]) => moduleExports);
});

// const MarketPlace = React.lazy(() => import('./marketplace/MarketPlace'));
const NoMatch = React.lazy(() => import('./NoMatch'));

const mainApp = (
  <MuiThemeProvider theme={theme}>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={MarketPlace} />
          {dashboardRoutes.map((prop, key) => {
            return <Route exact path={prop.path} component={prop.component} key={key} />;
          })}
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
    </BrowserRouter>
    {/* </Provider> */}
  </MuiThemeProvider>
);

ReactDOM.render(mainApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
