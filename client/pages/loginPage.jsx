import React, { Component } from 'react';
//import LoginContainer from '../containers/LoginContainer.jsx';
import '../styles/login.scss';

const mapDispatchToProps = (dispatch) => {};

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
      <div className="logInForm">
        <h1>Sign Up Now</h1>
        <input type="email" className="inputBox" placeholder="Your Email" />
        <input
          type="password"
          className="inputBox"
          placeholder="Your Password"
        />
        <input type="button" class="primaryButton" value="Submit" />
        <hr />
        <p className="or">OR</p>
        <input
          type="button"
          class="secondaryButton"
          value="Login with Google"
        />
        <p>
          Do you have an account? <a href="#">Sign in</a>
        </p>
      </div>
    );
  }
}

//const Login = () => <div>Login Works!</div>;

export default Login;
