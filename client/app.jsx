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
    super(props)

    }

  render() {
    /*
    let displayNavBar;
    if (this.props.isLoggedIn){
      displayNavBar = <NavBar />
    } else {
      displayNavBar = null;
    }*/
    
    return (
      <div className="masterContainer">
        <div className="masterContainerHeader">
           <NavBar /> 
        </div>
        <div className="content">
          <p>Test</p>
          <RoutesForApp />
        </div>
      </div>
    );
  }
};

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);







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
