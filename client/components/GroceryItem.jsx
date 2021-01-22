import React, { Component } from 'react';

const GroceryItem = (props) => {

  if (isHousehold) {
  // render the household item

    

  } else {
    // render user item


  }  

  return (
    <div className = 'GroceryItemCard' key={`G${index}`}  >
      <span> {/* item name */}   </span>
      {name}
      <button id='MoveToFridgeBtn'
          onClick={() => {/* 
            * put a fridge image
            * event handler -> to invoke the dispatcher to create 
          */}}> 
      </button>
      <button id='EditItemBtn' onClick={() => {/* event handler to invoke dispatcher to edit */ }}>
      </button>
      <button id='DeleteItemBtn' onClick={() => {/* event handler to invoke dispatcher to delete */ }}>
      </button>
    </div>
  )
};

export default GroceryItem;