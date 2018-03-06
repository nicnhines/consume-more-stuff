import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import pageDisplayReducer from './pageDisplayReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  pageDisplay: pageDisplayReducer,
  items: itemsReducer,
  users: usersReducer
});