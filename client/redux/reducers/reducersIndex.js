import { combineReducers } from 'redux';
import userReducer from './userReducer';
import householdReducer from './householdReducer';

export default combineReducers({
  user: userReducer,
  household: householdReducer,
});

export default reducers;