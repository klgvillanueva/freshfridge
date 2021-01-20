import * as types from '../constants/actionTypes';


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