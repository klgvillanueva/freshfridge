import React from 'react';
import '../styles/login.css';

const Login = () => (
  <div className="logInForm">
    <h1>Log In</h1>
    <input type="email" className="inputBox" placeholder="Your Email" />
    <input type="password" className="inputBox" placeholder="Your Password" />
    <p>I agree to the Terms of Services</p>
  </div>
);

export default Login;
