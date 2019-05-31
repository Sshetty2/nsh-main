import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MarketPlace from './MarketPlace';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { rootReducer } from './reducers';

const mainApp = (
  <MuiThemeProvider theme={theme}>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/marketplace" />
        <Route component={MarketPlace} exact path="/marketplace" />
        {/* <Route
          component={UserList}
          exact
          path="/users"
        /> */}
      </Switch>
    </BrowserRouter>
    {/* </Provider> */}
  </MuiThemeProvider>
);

ReactDOM.render(mainApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
