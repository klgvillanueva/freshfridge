import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import RoutesForApp from './routes/routes.js';

// import Household from './pages/householdPage.jsx';
// import Login from './pages/loginPage.jsx';
// import User from './pages/userPage.jsx';
// import SignUp from './pages/signupPage.jsx';

//import Routes from './routes/routes';

// const mapStateToProps = (state) => {
//   //navbar state
// };

// const mapDispatchToProps = (dispatch) => {
//   // dispatchers to update navbar state depending on what is clicked in navbar
// };
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);

/*

    /*
    let displayNavBar;
    if (this.props.isLoggedIn){
      displayNavBar = <NavBar />
    } else {
      displayNavBar = null;
    }
*/
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
        <hr />
        <Routes />
      </div>








        

import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Household from './pages/householdPage.jsx';
import Login from './pages/loginPage.jsx';
import User from './pages/userPage.jsx';
import SignUp from './pages/signupPage.jsx';      

      <div className="appHeader">
        <Link to="/user">
          <img
            id="logo"
            src="./assets/fflogo.png"
            alt="Fresh Fridge Logo"
            height="150px"
            width="250px"
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



*/
