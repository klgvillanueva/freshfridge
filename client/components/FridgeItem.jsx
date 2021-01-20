import React, { Component } from 'react';

const FridgeItem = (props) => {

  // destructure the props object

  // confirm if username is null,

  let name;
  if (!username) {
    name = null
  } else {
    name = <span> {props.username} </span>;
  }

  return (
    <div className='fridgeItemCard' key={`F${index}`}>
      <span> {/* item name */}   </span>
      <button id='EditItemBtn' onClick={() => {/* event handler to invoke dispatcher to edit */ }}>
      </button>
      <button id='DeleteItemBtn' onClick={() => {/* event handler to invoke dispatcher to delete */ }}>
      </button>
    </div>  
  )

}


export default FridgeItem;