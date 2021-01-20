import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import RoutesForApp from './routes/routes.js';

const mapStateToProps = (state) => {
  //navbar state
};

const mapDispatchToProps = (dispatch) => {
  // dispatchers to update navbar state depending on what is clicked in navbar
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /**
     *     
     * let displayNavBar;
    if (this.props.isLoggedIn){
      displayNavBar = <NavBar />
    } else {
      displayNavBar = null;
    }
     */

    return (
      <div>
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
        <hr />
        <RoutesForApp />
      </div>
    );
  }
}

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);
