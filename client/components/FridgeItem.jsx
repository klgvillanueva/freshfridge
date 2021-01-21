import React, { Component } from 'react';

const FridgeItem = ({ username, firstName, itemName }) => {

  // destructure the props object

  // confirm if username is null,
  let name;
  if (!username) {
    name = null
  } else {
    name = <span> {firstName} </span>;
  }

  return (
    <div className='fridgeItemCard' key={`F${index}`}>
      <span> {itemName} </span>
      <button id='EditItemBtn' onClick={() => {/* event handler to invoke dispatcher to edit */ }}>
      </button>
      <button id='DeleteItemBtn' onClick={() => {/* event handler to invoke dispatcher to delete */ }}>
      </button>
    </div>  
  )

}


export default FridgeItem;