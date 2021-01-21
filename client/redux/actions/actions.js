import * as types from '../constants/actionTypes';


/**** IF NEEDED, DOES API CALLS TO SERVER AND CREATES THE ACTION OBJ WITH INFO THAT STATE NEEDS TO UPDATE ***/

// to log into account
export const loggingIn = ({ username, password }) => ( dispatch ) => {

  fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const { userID, firstName, username, userItems, householdID, householdName, householdItems } = data;

      // route to overallReducer
      dispatch({
        type: types.IS_LOGGED_IN,
        payload: true,
      });
      
      // to userReducer
      dispatch({
        type: types.USER_INFO,
        payload: {
          userID: userID,
          firstName: firstName,
          username: username,
          userItems: userItems,
        }
      });

      // to householdReducer (could be null)
      dispatch({
        type: types.HOUSEHOLD_INFO,
        payload: {
          householdID: householdID,
          householdName: householdName,
          householdItems: householdItems, // includes all properties of an item AND user's first_name
        }
      })
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - loggingIn: ${e}`)
    });
};


// to log into account as a new user
export const createUser = ({ firstName, username, password }) => ( dispatch ) => {

  fetch('/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      firstName: firstName,
      username: username,
      password: password,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const { firstName, username, password } = data;

      // route to overall Reducer
      dispatch({
        type: types.IS_LOGGED_IN,
        payload: true,
      });
      
      // route to UserReducer
      dispatch({
        type: types.USER_INFO,
        payload: {
          userID: userID,
          firstName: firstName,
          username: username,
        }
      });
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - createUser: ${e}`)
    });
};


// to log out of account
export const loggingOut = ({ userID }) => ( dispatch ) => {

  fetch('/auth/logout', {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      userID: userID,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
    // route to overall reducer
      dispatch({
        type: types.IS_LOGGED_OUT,
        payload: false,
      })
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - loggingOut: ${e}`)
    })
}


// creating a new household and update state
export const createHousehold = ({ householdName, userID }) => ( dispatch ) => {

  fetch('/household/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      householdName: householdName,
      userID: userID,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const { householdID, householdName, householdItems } = data;
    
      // add householdID to userReducer
      dispatch({
        type: types.ADD_HOUSEHOLD_TO_USER,
        payload: householdID,
      })

      // add to HouseholdReducer
      dispatch({
        type: types.HOUSEHOLD_INFO,
        payload: {
          householdID: householdID,
          householdName: householdName,
          householdItems: householdItems, // includes all properties of an item AND user's first_name or could be null
        }
      })
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - createHousehold: ${e}`)
    });
};


// to join an existing Household
export const joinHousehold = ({ householdID, userID }) => ( dispatch ) => {

  fetch('/household/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      householdID: householdID,
      userID: userID,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const { userID, firstName, username, householdID, householdName, householdItems } = data;
      
      // route to UserReducer
      dispatch({
        type: types.ADD_HOUSEHOLD_TO_USER,
        payload: householdID
      });

      // route to HouseholdReducer
      dispatch({
        type: types.HOUSEHOLD_INFO,
        payload: {
          householdID: householdID,
          householdName: householdName,
          householdItems: householdItems, // includes all properties of an item AND user's first_name or could be null
        }
      })
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - joinHousehold: ${e}`)
    });
};


// to add an item
export const addItem = ({ itemName, priority, shared, grocery, fridge, userID, householdID }) => ( dispatch ) => {

  fetch('/lists', {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      itemName: itemName,
      priority: number,
      shared: shared,
      grocery: grocery,
      fridge: fridge,
      userID: userID,
      householdID: householdID,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const { userItems, householdItems } = data;

      // add Household to UserID
      dispatch({
        type: types.UPDATE_USER_ITEMS,
        payload: userItems
      });

      // updates state with household info
      dispatch({
        type: types.UPDATE_HOUSEHOLD_ITEMS,
        payload: householdItems // includes all properties of an item AND user's first_name or could be null
      })
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - addItem: ${e}`)
    });
};


// to delete an item
export const deleteItem = ({ itemID }) => ( dispatch ) => {

  fetch('/lists', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      itemID: itemID,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const { userItems, householdItems } = data;
      
      // add Household to UserID
      dispatch({
        type: types.UPDATE_USER_ITEMS,
        payload: userItems
      });

      // updates state with household info
      dispatch({
        type: types.UPDATE_HOUSEHOLD_ITEMS,
        payload: householdItems // includes all properties of an item AND user's first_name or could be null
      });
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - deleteItem: ${e}`)
    });
};


// to move/edit item
export const editItem = ({ itemID, shared, grocery, fridge }) => ( dispatch ) => {

  fetch('/lists', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({
      itemID: itemID,
      shared: shared,
      grocery: grocery,
      fridge: fridge,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      const { userItems, householdItems } = data;

      // add Household to UserID
      dispatch({
        type: types.UPDATE_USER_ITEMS,
        payload: userItems
      });

      // updates state with household info
      dispatch({
        type: types.UPDATE_HOUSEHOLD_ITEMS,
        payload: householdItems // includes all properties of an item AND user's first_name or could be null
      })
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - editItem: ${e}`)
    });
};



// get all user's items
export const getUserItems = ({ userID }) => ( dispatch ) => {

  fetch(`/lists/userItems/${userID}`)
    .then((data) => data.json())
    .then((data) => {
      const { userItems } = data;

      // add Household to UserID
      dispatch({
        type: types.UPDATE_USER_ITEMS,
        payload: userItems
      })

    .catch((e) => {
      console.log(`ERROR in Actions.js - getUserItems: ${e}`)
    });
  })
};


// get all household items
export const getHouseholdItems = ({ householdID }) => ( dispatch ) => {

  fetch(`/lists/householdItems/${householdID}`)
    .then((data) => data.json())
    .then((data) => {
      const { householdItems } = data;

      // updates state with household info
      dispatch({
        type: types.UPDATE_HOUSEHOLD_ITEMS,
        payload: householdItems // includes all properties of an item AND user's first_name or could be null
      })
    })
    .catch((e) => {
      console.log(`ERROR in Actions.js - getHouseholdItems: ${e}`)
    });  
};