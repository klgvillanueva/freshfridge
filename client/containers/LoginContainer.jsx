import React, { Component } from 'react';
//import Auth from '../components/Auth.jsx';
// import GoogleAuth from './GoogleAuth.jsx';

const mapDispatchToProps = (dispatch) => {
  // dispatcher for sending fetch for login
  // dispatcher for sending fetch for signup
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    // bind the event handlers
  }

  // declare event handlers

  render() {
    return (
      <div className="MainContainer">
        {' '}
        {/*Faraz, please rename the className to LoginContainer and match in stylesheet*/}
        {/* 
      input for Username 
      input for Password
      login button
      sign up button with event handler to trigger the signup modal


  <div className="logInForm">
    <h1>Log In</h1>
    <input type="email" className="inputBox" placeholder="Your Email" />
    <input type="password" className="inputBox" placeholder="Your Password" />
    <p>I agree to the Terms of Services</p>
  </div>

      */}
      </div>
    );
  }
}

//export default connect(null, mapDispatchToProps)(LoginContainer);
export default LoginContainer;

/*
original loginContainer

const MainContainer = () => {
  //const [fetched, setFetched] = useState(false);

  return (
    <div className="MainContainer"> 
//     <h1>FRESH FRIDGE</h1>
//     <Auth />
//     {/* <GoogleAuth /> */
//     <ListContainer fetched={fetched} setFetched={setFetched} />
//     <AddItem setFetched={setFetched} />
//   </div>
// );
// };
