import * as types from '../actions/constants/actionTypes';

// const initialState = {
  //   itemName: '',
  //   priority: 1,
  //   shared: null,
  //   grocery: null,
  //   fridge: null,
  //   userID: 0,
  //   householdID: 0,
  // }

const Reducer = (state = initialState, action) => {
  // let marketList;

  switch (action.type) {
    case types.USER_INFO: {
      // return updated state
      return {
        ...state,
        userID: userID,
        firstName: firstName,
        username: username,
        userItems: userItems,
      };
    }

    case types.HOUSEHOLD_INFO: {
      return {
        ...state, 
        householdID: householdID,
        householdName: householdName,
        householdItems: householdItems, 
      };
    }
    
    case types.ADD_CARD: {
      const totalCards = state.totalCards + 1;
      marketList = state.marketList.map((mkt) => {
        if (mkt.marketId === action.payload) {
          const newMkt = {...mkt};
          newMkt.cards += 1;
          return newMkt;
        }
        return mkt;
      });

      return {
        ...state,
        marketList: marketList,
        totalCards: totalCards
      };
    }

    case types.DELETE_CARD: {
      const totalCards = state.totalCards - 1;
      marketList = state.marketList.map((mkt) => {
        if (mkt.marketId === action.payload) {
          const newMkt = { ...mkt };
          newMkt.cards -= 1;
          return newMkt;
        }
        return mkt;
      });
      
      return {
        ...state,
        marketList: marketList,
        totalCards: totalCards
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;