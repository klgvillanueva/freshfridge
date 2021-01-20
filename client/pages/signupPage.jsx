import React from 'react';
import '../styles/login.scss';

class SignUp extends React.PureComponent {
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

export default SignUp;
