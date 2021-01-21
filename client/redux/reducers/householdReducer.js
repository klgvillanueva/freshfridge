import * as types from '../actions/constants/actionTypes';

const initialState = {
    householdID: null,
    householdName: "",
    householdItems: [],
  }

const householdReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.HOUSEHOLD_INFO: {
      return {
        ...state,
        householdID: action.payload.householdID,
        householdName: action.payload.householdName,
        householdItems: action.payload.householdItems,
      };
    }

    case types.UPDATE_HOUSEHOLD_ITEMS: {
      return {
        ...state, 
        householdItems: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default householdReducer;