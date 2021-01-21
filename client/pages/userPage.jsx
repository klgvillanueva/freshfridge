import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router';
import FridgeContainer from '../containers/FridgeContainer.jsx';
import GroceryContainer from '../containers/GroceryContainer.jsx';


const mapStateToProps = (state) => {
  const { userID, firstName, userItems } = state.user;
  return { userID, firstName, userItems };
};

class User extends Component {
  constructor(props){
    super(props)
  }

  render() {

    const { userID, firstName, userItems } = this.props;
    
    return( 
    <div className='UserGrid'>
      My User Page Works!
      <FridgeContainer
        userID={userID}
        firstName={firstName}
        userItems={userItems} 
        />
      <GroceryContainer 
        userID={userID}
        firstName={firstName}
        userItems={userItems} 
        />
    </div>
    )
  }
}

export default connect(mapStateToProps, null)(User);
export default withRouter(User);
