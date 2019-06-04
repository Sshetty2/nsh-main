import React from 'react';

import ProductList from './views/ProductList';
import UserList from './views/UserList';
import Typography from './views/Typography';
import Icons from './views/Icons';
import Account from './views/Account';
import Settings from './views/Settings';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import UnderDevelopment from './views/UnderDevelopment';
import NotFound from './views/NotFound';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const routes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/users',
    component: UserList
  },
  {
    path: '/typography',
    component: Typography
  },
  {
    path: '/icons',
    component: Icons
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/settings',
    component: Settings
  },
  {
    path: '/sign-up',
    component: SignUp
  },
  {
    path: '/sign-in',
    component: SignIn
  },
  {
    path: '/under-development',
    component: UnderDevelopment
  },
  {
    path: '/not-found',
    component: NotFound
  }
];

export default routes;
