import React, { Component } from 'react';
import FridgeItem from "../components/FridgeItem.jsx";


const mapDispatchToProps = (dispatch) => {
  //
}

const mapStateToProps = (dispatch) => {
  //  
}



class FridgeContainer extends Component{
  constructor(props) {
    super(props)

  }

}

// create array of items


render() {
    
  return (
  <div className="FridgeContainer"> {/*Faraz, please rename the className to LoginContainer and match in stylesheet*/}
    <h1> My Fridge </h1>
    {/* 
      rows of items
    */}
  </div>
  );

}

};


export default connect(mapStateToProps, mapDispatchToProps)(FridgeContainer);
export default FridgeContainer;
