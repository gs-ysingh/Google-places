import React from "react";
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';

const Routes = () => (
  <Switch>
    <Route component={Landing} path='/' />
  </Switch>
);

export default Routes;