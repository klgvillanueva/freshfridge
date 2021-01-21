import { combineReducers } from 'redux';
import userReducer from './userReducer';
import householdReducer from './householdReducer';

const reducers = combineReducers({
  user: userReducer,
  household: householdReducer,
});

export default reducers;