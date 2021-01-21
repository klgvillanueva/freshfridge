import React, { Component } from 'react';
import { connect } from 'react-redux';
// routes for React Route
import { Link } from 'react-router-dom';
import RoutesForApp from './routes/routes.js';

// to import dispatchers:
import * as actions from './redux/actions/actions';

import './styles/app.scss';

// NavBar is the only component stagnant 
import NavBar from './components/NavBar.jsx';

const mapStateToProps = (state) => {
  const { isLoggedIn, userID, householdID } = state.user;
  return { isLoggedIn, userID, householdID };
};

const mapDispatchToProps = (dispatch) => {
  // dispatchers for NavBar
  return {
    logOut: (userID) => dispatch(actions.loggingOut(userID)),
    getUserItems: (userID) => dispatch(actions.getUserItems(userID)),
    getHouseholdItems: (householdID) => dispatch(actions.getHouseholdItems(householdID)),
    //loggingIn: (username, password) => dispatch(actions.loggingIn(username, password)),
    //createUser: (newUserInfo) => dispatch(actions.createUser(newUserInfo)), // arg is an object!!
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    }

  render() {
  
    let displayNavBar;
    let logo;
    if (this.props.isLoggedIn){
      logo = 
          <Link to="/user"> 
            <img
              id="logo"
              src="./assets/fflogo.png"
              alt="Fresh Fridge Logo"
              height='150px'
              width='250px'
            ></img>
          </Link>;
      displayNavBar = <NavBar
            userID={this.props.userID}
            householdID={this.props.householdID}
            logOut={this.props.logOut}
            getUserItems={this.props.getUserItems}
            getHouseholdItems={this.props.getHouseholdItems}
        />;
    } else {
      displayNavBar = null;
      logo =             
          <img
            id="logo"
            src="./assets/fflogo.png"
            alt="Fresh Fridge Logo"
            height='150px'
            width='250px'>
          </img>
    }
    
    return (
      <div>
        <div className="appHeader">
          {/* logo */}
          {/* displayNavBar */}
          <Link to="/user"> 
            <img
              id="logo"
              src="./assets/fflogo.png"
              alt="Fresh Fridge Logo"
              height='150px'
              width='250px'
            ></img>
          </Link>;

          <NavBar
            userID={this.props.userID}
            householdID={this.props.householdID}
            logOut={this.props.logOut}
            getUserItems={this.props.getUserItems}
            getHouseholdItems={this.props.getHouseholdItems}
          />
        </div>

        <div className="content2by2">
          <RoutesForApp />
        </div>
      </div>
    );
  }
};

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);



/*

KAT AND HEIDI'S OG CODE:

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import RoutesForApp from './routes/routes.js';
import './styles/app.scss';
import Login from './pages/loginPage.jsx';

const mapStateToProps = (state) => {
  //navbar state 
};

const mapDispatchToProps = (dispatch) => {
  // dispatchers to update navbar state depending on what is clicked in navbar
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
/*
    let displayNavBar;
    if (this.props.isLoggedIn){
      displayNavBar = <NavBar />
    } else {
      displayNavBar = null;
    }

return (

  <div className='appHeader'>
    <Link to="/user"> 
        <img
          id="logo"
          src="./assets/fflogo.png"
          alt="Fresh Fridge Logo"
          height='150px'
          width='250px'
        ></img>
    </Link>
    <NavBar />
    <Router>
<Switch>
    <Route exact path="/user" component={User} />
    <Route exact path="/household" component={Household} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/" component={Login} />
  </Switch>
</Router>
  </div>


);
}
}

*/
