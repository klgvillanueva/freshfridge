import React, { Component } from 'react';
import GroceryItem from '../components/GroceryItem.jsx';


const mapStateToProps = (state) => {
  //navbar state 
};

const mapDispatchToProps = (dispatch) => {
  // dispatcher for sending fetch for login 
  // dispatcher for sending fetch for signup 
}


class GroceryContainer extends Component {
  constructor(props){
    super(props)
    // bind the event handlers
  }

  // declare event handlers

  render() {

    // create groceryItems = [];

    // iterate through items list and push <GroceryItem > for each item

    return (
    <div className="GroceryContainer">
      <h1>My Grocery List</h1>
      <button id='AddItemBtn' onClick={() => /* event handler to invoke dispatcher to add */ }>
      </button>

      <div className="GroceryList">
        {/* {groceryItems} */}
      </div>
      
    </div>
    );
  
  }

};


//export default connect(mapStateToProps, mapDispatchToProps)(GroceryContainer);
export default GroceryContainer;






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