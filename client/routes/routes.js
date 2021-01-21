import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch as Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

// import pages for routes
import Household from '../pages/householdPage.jsx';
import Login from '../pages/loginPage.jsx';
import User from '../pages/userPage.jsx';
import SignUp from '../pages/signupPage.jsx';
import NoMatch404Error from '../pages/404Error.jsx';

const customHistory = createBrowserHistory();

const RoutesForApp = () => (
  <Router history={customHistory}>
    <Route exact path="/">
      <Login history={customHistory}/>
    </Route>
    <Route path="/user">
      <User />
    </Route>
    <Route path="/household">
      <Household />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
    <Route>
      <NoMatch404Error />
    </Route>
  </Router>
);

export default RoutesForApp;
