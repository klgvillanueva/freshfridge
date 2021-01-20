import React, { Component } from 'react';

const FridgeItem = (props) => {

  return (
    <div className='fridgeItemCard' key={`F${index}`}>
      <span> {/* item name */}   </span>
      <button id='EditItemBtn' onClick={() => /* event handler to invoke dispatcher to edit */ }>
      </button>
      <button id='DeleteItemBtn' onClick={() => /* event handler to invoke dispatcher to delete */ }>
      </button>
    </div>  
  )

}


export default FridgeItem;