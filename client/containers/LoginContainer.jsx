import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    loggingIn: (username, password, history) => dispatch(actions.loggingIn(username, password, history)),
  }
}

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    return (

      <div className="logInForm">
        <h1>Please Log In </h1>
        <input 
          type="text" 
          className="inputBox" 
          id='usernameInput'
          placeholder="username"
          />
        <input
          type="password"
          className="inputBox"
          id='passwordInput'
          placeholder="password"
        />
          <button type="button" className="primaryButton"
          onClick={() => {
            const usernameInput = document.getElementById('usernameInput').value;
            const passwordInput = document.getElementById('passwordInput').value;

            console.log(usernameInput);
            console.log(passwordInput);
            console.log('this.props.history: ' + this.props.history);
            // this.props.history.push('/user');

            this.props.loggingIn(usernameInput, passwordInput, this.props.history);
          }}
          >login</button>

        <hr />

        <p className="or">OR</p>

        <button
          type="button"
          className="secondaryButton"
          >Login with Google
        </button>
        
        <p>
          Don't have an account? 
          <a href="#"> Sign up here! 
          {/* pop open the Sign up Modal or reroute to Sign up page */}
          </a>
        </p>
    </div>

    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
//export default LoginContainer;


/*
testing the link button

        <Link {/*to='/user' }>
        <button type="button" className="primaryButton"
        onClick={() => {
          const usernameInput = document.getElementById('usernameInput').value;
          const passwordInput = document.getElementById('passwordInput').value;

          console.log(usernameInput);
          console.log(passwordInput);

          this.props.loggingIn(usernameInput, passwordInput);
        }}
        >login</button>
    </Link>

*/






/*
      <div className="MainContainer">
        {' '}
        {/*Faraz, please rename the className to LoginContainer and match in stylesheet}
        {/* 
      input for Username 
      input for Password
      login button // onClick -> invoke dispatcher and pass as an argument {username: string, password: string}
      sign up button with event handler to trigger the signup modal


  <div className="logInForm">
    <h1>Log In</h1>
    <input type="email" className="inputBox" placeholder="Your Email" />
    <input type="password" className="inputBox" placeholder="Your Password" />
    <p>I agree to the Terms of Services</p>
  </div>

      }
      </div>



*/





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
//   </div>]

// );
