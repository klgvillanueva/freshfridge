import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

import FridgeItem from "../components/FridgeItem.jsx";
// import AddItem from "../components/AddItem.jsx"

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemInfoObj) => dispatch(actions.addItem(itemInfoObj)),
    editItem: (itemInfoObj) => dispatch(actions.editItem(itemInfoObj)),
    deleteItem: (itemID) => dispatch(actions.deleteItem(itemID))
    // update item (by double clicking on item?)
  }
}
class FridgeContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    let fridgeItems = [];

    if (!props.householdItems) {
      // render the user fridge 
      const { userID, firstName, userItems } = props;
      const { addItem, editItem, deleteItem } = this.props;
      
      userItems.forEach((item, idx) => {
        fridgeItems.push(
          <FridgeItem 

          />)
      })




    } else {
      // household
    }

    // need to have logic to check if this.props:
      // if userItems.length === 0, then we are rendering for Household Page 
      // if householdItems.length === 0, then we are rendering for User Page

    

    // iterate through items list and push <FridgeItem > for each item
    // for (let i = 0; i < this.props.userItems.length; i += 1) {
    //   fridgeItems.push(<FridgeItem />)
    // }

  

    return (
    <div className="FridgeContainer"> {/*Faraz, please rename the className to LoginContainer and match in stylesheet*/}
      <h1> Fridge </h1>
      <button id='AddItemBtn' onClick={() => {/*  
        invoke the AddItemModal
        pass into the AddItem a property of "location: fridge"
        <AddItem location={'fridge'} addItemHandler={this.addItemHandler} userID={this.props.userID} householdID={this.props.householdID}
      */ }}>
        </button>
      <div className='FridgeList'>  
      {fridgeItems}
      </div>
    </div>
    );

  }

};


export default connect(null, mapDispatchToProps)(FridgeContainer);
//export default FridgeContainer;
