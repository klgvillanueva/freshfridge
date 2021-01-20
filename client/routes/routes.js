import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import GroceryList from '../pages/groceryList';
import Login from '../pages/login';
import ShoppingList from '../pages/shoppingList';
import SignUp from '../pages/signup';
import MainContainer from '../Container/MainContainer.jsx';
import NoMatch from '../pages/noMatch';

const RoutesForApp = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/GroceryList">
      <GroceryList />
    </Route>
    <Route path="/ShoppingList">
      <ShoppingList />
    </Route>
    <Route path="/SignUp">
      <MainContainer />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);

export default RoutesForApp;
