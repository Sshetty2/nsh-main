import React from 'react';

const MarketPlace = React.lazy(() => import('../marketplace/MarketPlace'));
const Dashboard = React.lazy(() => import('../dashboard/Dashboard'));

var indexRoutes = [
  { path: '/', name: 'Marketplace', component: MarketPlace },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default indexRoutes;

// <Redirect exact from="/" to="/marketplace" />
// <Route component={MarketPlace} exact path="/marketplace" />
// <Route component={Dashboard} exact path="/dashboard" />
// <Route component={NoMatch} />
