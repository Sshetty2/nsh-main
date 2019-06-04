import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import MarketPlace from './marketplace/MarketPlace';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { rootReducer } from './reducers';

import indexRoutes from './routes/index';

const MarketPlace = React.lazy(() => import('./marketplace/MarketPlace'));
const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));
const NoMatch = React.lazy(() => import('./NoMatch'));

const mainApp = (
  <MuiThemeProvider theme={theme}>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Switch>
          {indexRoutes.map((prop, key) => {
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
