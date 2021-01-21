import React, { Component } from 'react';
import FridgeItem from "../components/FridgeItem.jsx";


const mapDispatchToProps = (dispatch) => {
  // userItems: an array or empty array
  // householdItems: an array or empty array
}

const mapStateToProps = (dispatch) => {
  // adding item
  // updating item
  // deleting item
  // moving item
}

class FridgeContainer extends Component {
  constructor(props) {
    super(props)
    // bind event handlers here
    this.addItemHandler = this.addItemHandler.bind(this);
  }

  // declare event handlers
  addItemHandler(payloadObject){
    // invoke the add item dispatcher here
  }

  render() {

    // need to have logic to check if this.props:§z
      // if userItems.length === 0, then we are rendering for Household Page 
      // if householdItems.length === 0, then we are rendering for User Page

    // create fridgeItems = [];

    // iterate through items list and push <FridgeItem > for each item

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
      {/* {fridgeItems */}
      </div>
    </div>
    );

  }

};


//export default connect(mapStateToProps, mapDispatchToProps)(FridgeContainer);
export default FridgeContainer;
