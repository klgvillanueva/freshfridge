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

      // updates state to render NavBar
      dispatch({
        type: types.IS_LOGGED_IN,
        payload: true,
      });
      
      // updates state with user info
      dispatch({
        type: types.USER_INFO,
        payload: {
          userID: userID,
          firstName: firstName,
          username: username,
          userItems: userItems,
        }
      });

      // updates state with household info (could be null)
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

      // updates state to render NavBar
      dispatch({
        type: types.IS_LOGGED_IN,
        payload: true,
      });
      
      // updates state with user info
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

    // updates state to render NavBar back to Homepage state
      dispatch({
        type: types.IS_LOGGED_OUT,
        payload: true,
      })
      
    .catch((e) => {
      console.log(`ERROR in Actions.js - loggingIn: ${e}`)
    });
};



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
    
      // add householdID to user's state
      dispatch({
        type: types.ADD_HOUSEHOLD_TO_USER,
        payload: householdID,
      })

      // add household info to state
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

      
      // add Household to UserID
      dispatch({
        type: types.ADD_HOUSEHOLD_TO_USER,
        payload: householdID
      });

      // updates state with household info
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
export const joinHousehold = ({  }) => ( dispatch ) => {

  fetch('/lists', {
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

      
      // add Household to UserID
      dispatch({
        type: types.ADD_HOUSEHOLD_TO_USER,
        payload: householdID
      });

      // updates state with household info
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
