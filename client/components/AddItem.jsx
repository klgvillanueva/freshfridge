import React from 'react';

const AddItem = ({ itemName, location, addItemHandler, userID, householdID }) => {

  const [itemName, setItemName] = useState("");   // item name
  const [priority, setPriority] = useState(null);    // priority
  const [shared, setShared] = useState(false);    // shareable
  const [fridge, setFridge] = useState(null);
  const [grocery, setGrocery] = useState(null);
  /* we need to pass this object as an argument to our addItemHandler:
  {
    itemName: string,
    priority: number,
    shared: boolean,
    grocery: boolean,
    fridge: boolean,
    userID: number,
    householdID: number/null,
  }
*/

if (location === 'fridge') {
    setFridge(true);
    setGrocery(false);
  } else if (location === 'grocery') {
    setGrocery(true);
    setFridge(false);
  }


  return (
    <div className='addItemContainer'>
      <h2>Add an Item</h2>
      <div>
        <input type="text" 
              placeholder="item" 
              value={itemName} 
              onChange={(e) => setItemName(e.target.value)} required>
        </input>

        <select id="add-item-select" className='dropdown' defaultValue={null} onChange={(e) => setPriority(e.target.value)}>
          <option value={null}>priority (optional)</option>
          <option value={1}>high</option>
          <option value={2}>medium</option>
          <option value={3}>low</option>
        </select>

        <label for="shared"> Shareable? </label>
        <input type="checkbox" id="shared" value={true} onChange={(e) => setShared(e.target.value)}></input>

      <button id='FinalAddItemBtn'onClick={() =>{
        const payloadObj = {
          itemName: itemName,
          priority: number,
          shared: shared,
          grocery: grocery,
          fridge: fridge,
          userID: userID,
          householdID: householdID,
        };

        addItemHandler(payloadObj)}
        }>Add</button>
      </div>
    </div>
  )
};

export default AddItem;






/*
original AddItem


const AddItem = ({setFetched}) => {
  const [itemName, setItemName] = useState("");   // item name
  const [priority, setPriority] = useState(null);    // priority
  const [shareability, setShareability] = useState(false);    // shareable
  const [assignedList, setAssignedList] = useState("grocery");    // which list to add it to

  // click handler: initiates an http request to send the new item's information to the database
  const submit = () => {
    console.log('Form input: ', itemName, priority, shareability, assignedList);

    fetch('/lists/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: itemName,
        location: assignedList,
        priority,
        shared: shareability
      })
    }).then((res) => res.json())
      .then((data) => {
        setFetched(false);
        console.log('Response to AddItem.jsx PUT: ', data);
    }).catch((error) => console.log('ERR at AddItem.jsx PUT: ', error));
  }

  return (
    <div className='addItemContainer'>
      <h2>Add an Item</h2>
      <div>
      <input type="text" 
            placeholder="item" 
            value={itemName} 
            onChange={(event) => setItemName(event.target.value)} required></input>

      <select id="add-item-select" className='dropdown' defaultValue={null} onChange={(event) => setPriority(event.target.value)}>
        <option value={null}>priority (optional)</option>
        <option value={1}>high</option>
        <option value={2}>medium</option>
        <option value={3}>low</option>
      </select>

      <label><input type="checkbox" value={shareability} onChange={(event) => setShareability(event.target.value)}></input>shareable?</label>

      <select id="add-item-select" className='dropdown' defaultValue={assignedList} onChange={(event) => setAssignedList(event.target.value)} required>
        <option value="" disabled>add to: </option>
        <option value="fridge">fridge</option>
        <option value="grocery">grocery</option>
      </select>

      <button onClick={submit}>Add</button>
      </div>
    </div>
  )
};


      <select id="add-item-select" className='dropdown' defaultValue={assignedList} onChange={(event) => setAssignedList(event.target.value)} required>
        <option value="" disabled>add to: </option>
        <option value="fridge">fridge</option>
        <option value="grocery">grocery</option>
      </select>



*/