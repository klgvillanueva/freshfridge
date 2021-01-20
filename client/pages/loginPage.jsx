import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer.jsx';

const mapDispatchToProps = (dispatch) => {

}

class Login extends Component {
  constructor(props){
    super(props)
    // bind all event handlers here
  }

    /* declare all event handlers here -> 
    * INSIDE THE EVENT HANDLER FUNCTION DEFINITION: make sure to invoke the dispatchers as:
     *this.props.dispatcher(value needed to be passed in for the fetch request)
    */



  render(){
    return (
      <div className='loginFlexContainer'>
        <p>Login Works!</p>
        <LoginContainer/>
      </div>
    )
  }

}

//const Login = () => <div>Login Works!</div>;

export default Login;
