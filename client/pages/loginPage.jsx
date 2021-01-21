import React, { Component } from 'react';
import { withRouter } from 'react-router';

import LoginContainer from '../containers/LoginContainer.jsx';
import '../styles/login.scss';


class Login extends Component {
  constructor(props) {
    super(props);
    // bind all event handlers here
  }

  /* declare all event handlers here ->
   * INSIDE THE EVENT HANDLER FUNCTION DEFINITION: make sure to invoke the dispatchers as:
   *this.props.dispatcher(value needed to be passed in for the fetch request)
   */

  render() {
    return (
      <div className='page' id='loginPage'>
        <LoginContainer history={this.props.history}/>
      </div>
    );
  }
}

export default withRouter(Login);
