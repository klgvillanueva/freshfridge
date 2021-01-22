import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

import GroceryItem from '../components/GroceryItem.jsx';


const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (itemInfoObj) => dispatch(actions.addItem(itemInfoObj)),
    editItem: (itemInfoObj) => dispatch(actions.editItem(itemInfoObj)),
    deleteItem: (itemID) => dispatch(actions.deleteItem(itemID))
  }
}


class GroceryContainer extends Component {
  constructor(props){
    super(props)
  }


  render() {
    let groceryItems;

    if (!props.householdItems) {
      // render the user grocery list
      const { userID, firstName, userItems } = props;
      const { editItem, deleteItem} = this.props;
    
      groceryItems = householdItems.map((item, idx) => {
        return <GroceryItem 
          isHousehold={false}
          item={item}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      })

    } else {

      const { householdID, householdName, householdItems } = props;
      const { editItem, deleteItem} = this.props;
    
      groceryItems = householdItems.map((item, idx) => {
        return <GroceryItem 
          isHousehold={true}
          item={item}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      })


    }
    // need to have logic to check if this.props:
    // if userItems.length === 0, then we are rendering for Household Page 
    // if householdItems.length === 0, then we are rendering for User Page


    // create groceryItems = [];
  
    // iterate through items list and push <GroceryItem > for each item

    return (
    <div className="GroceryContainer">
      <h1>Grocery List</h1>
      <button id='AddItemBtn' onClick={() => {/* 
      invoke the AddItemModal
      pass into the AddItem a property of "location: fridge"
        <AddItem location={'fridge'} addItemHandler={this.addItemHandler} userID={this.props.userID} householdID={this.props.householdID}
      */ }}>
      </button>

      <div className="GroceryList">
        {/* {groceryItems} */}
      </div>
      
    </div>
    );
  
  }

};


export default connect(null, mapDispatchToProps)(GroceryContainer);
// export default GroceryContainer;






/* Original Code

      const mappedItems = items.map((item, index) => {
    return <li key={`type${index}`}>
              {`${item.name}`}
              <span className="align-right">
                <button onClick={() => move(item._id, '\'fridge\'')}>  {/* ** SQL needs string parameters that are going to be concatenated onto a query to have a second pair of single quotes ** }
                <i className="far fa-check-circle"></i>
                </button>
                <button onClick={() => remove(item._id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </span>
            </li>;
    });



*/