import * as types from '../actions/constants/actionTypes';

const initialState = {
    isLoggedIn: false,
    userID: null,
    firstName: "",
    username: "",
    userItems: [],
    householdID: null,
  }

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.IS_LOGGED_IN: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }

    case types.IS_LOGGED_OUT: {
      return {
        ...state, 
        isLoggedIn: action.payload,
      };
    }
    
    case types.USER_INFO: {
      let newUserItems;
      // if user is a new user, then server will not send back a userItem property. we must check if it exists: 
      !action.payload.userItems ? newUserItems = [] : newUserItems = action.payload.userItems;

      return {
        ...state,
        userID: action.payload.userID,
        firstName: action.payload.firstName,
        username: action.payload.username,
        userItems: newUserItems,
        householdID: action.payload.householdID,
      };
    }

    case types.ADD_HOUSEHOLD_TO_USER: {
      return {
        ...state,
        householdID: action.payload
      };
    }

    case types.UPDATE_USER_ITEMS: {
      return {
        ...state,
        userItems: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;