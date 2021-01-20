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
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <div className="masterContainer">
        <div className="masterContainerHeader">
          <NavBar />
        </div>
        <div className="content">
          <RoutesForApp />
        </div>
      </div>
    );
  }
}

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);
