import React from 'react';
import MainContainer from './Container/MainContainer.jsx';
import NavBar from './components/NavBar';
import Routes from './routes/routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <hr />
        <Routes />
      </div>
    );
  }
}

export default App;
