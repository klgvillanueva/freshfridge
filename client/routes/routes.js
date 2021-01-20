import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch as Router } from 'react-router-dom';
import GroceryList from '../pages/groceryList';
import Login from '../pages/login';
import ShoppingList from '../pages/shoppingList';
import SignUp from '../pages/signup';
import MainContainer from '../Container/MainContainer.jsx';

const RoutesForApp = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/GroceryList" component={GroceryList} />
      <Route exact path="/ShoppingList" component={ShoppingList} />
      <Route exact path="/SignUp" component={MainContainer} />
    </div>
  </Router>
);

export default RoutesForApp;
