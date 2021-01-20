import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Route, Link, Switch as Router } from 'react-router-dom';
import GroceryList from '../pages/groceryList';
import Login from '../pages/login';
import ShoppingList from '../pages/shoppingList';
import SignUp from '../pages/signup';
import MainContainer from '../Container/MainContainer.jsx';
import NoMatch404Error from '../pages/404Error';
=======
import { Route, Switch as Router } from 'react-router-dom';

// import pages for routes
import Household from '../pages/householdPage.jsx';
import Login from '../pages/loginPage.jsx';
import User from '../pages/userPage.jsx';
import SignUp from '../pages/signupPage.jsx';
import NoMatch404Error from '../pages/404Error.jsx';

>>>>>>> 2220278229a50f87a42b6c2afdc60784a5f6dac4

const RoutesForApp = () => (
  <Router>
    <Route exact path="/">
      <Login />
    </Route>
<<<<<<< HEAD
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
      <NoMatch404Error />
    </Route>
=======
    <Route path="/user" >
      <User/> 
    </Route>
    <Route path="/household"> 
      <Household/> 
    </Route>
    <Route path="/signup"> 
      <SignUp/> 
    </Route>
    <Route>
      <NoMatch404Error />
    </Route>  
>>>>>>> 2220278229a50f87a42b6c2afdc60784a5f6dac4
  </Router>
);

export default RoutesForApp;
