import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/actions';

import FridgeContainer from '../containers/FridgeContainer.jsx';
import GroceryContainer from '../containers/GroceryContainer.jsx';


const mapStateToProps = (state) => {
  const { householdID, householdName, householdItems } = state.household;
  return { householdID, householdName, householdItems };
};

// const mapDispatchToProps = (dispatch) => {
//   // add item (modal to popup)
//   // update item (by double clicking on item?)
//   // update item for location (shareable, fridge, grocery)
//   // delete item 
// }

class Household extends Component {
  constructor(props){
    super(props)
    // bind all event handlers here
  }

    /* declare all event handlers here -> 
    * INSIDE THE EVENT HANDLER FUNCTION DEFINITION: make sure to invoke the dispatchers as:
     *this.props.dispatcher(value needed to be passed in for the fetch request)
    
    * fridge button to move item from grocery list to fridge list
      - need item id and location

    * add button to add item to either grocery list or fridge list
      - need item id and location

    * delete button to delete item from either list
      - need item id and location

     */

  
     // make sure the right props and dispatchers get distributed to the containers

  render() {

    const { householdID, householdName, householdItems } = this.props;

    return( 
    <div className='HouseGrid'>
      House Page Works!
      <FridgeContainer
        householdID={householdID}
        householdName={householdName}
        householdItems={householdItems} 
        />
      <GroceryContainer
        householdID={householdID}
        householdName={householdName}
        householdItems={householdItems} 
        />
    </div>
    )
  }
}


export default connect(mapStateToProps, null)(Household);
// export default Household;
