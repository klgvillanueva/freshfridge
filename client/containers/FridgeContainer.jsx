import React, { Component } from 'react';
import FridgeItem from "../components/FridgeItem.jsx";


const mapDispatchToProps = (dispatch) => {
  //
}

const mapStateToProps = (dispatch) => {
  //  
}



class FridgeContainer extends Component {
  constructor(props) {
    super(props)

  }


// create fridgeItems = [];

  // iterate through items list and push <FridgeItem > for each item

render() {


  return (
  <div className="FridgeContainer"> {/*Faraz, please rename the className to LoginContainer and match in stylesheet*/}
    <h1> Fridge </h1>
    <button id='AddItemBtn' onClick={() => {/* event handler to invoke dispatcher to add */ }}>
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
