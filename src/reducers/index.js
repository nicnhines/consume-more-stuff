import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import pageDisplayReducer from './pageDisplayReducer';
import usersReducer from './usersReducer';
import authenticationReducer from './authenticationReduer';

export default combineReducers({
  pageDisplay: pageDisplayReducer,
  items: itemsReducer,
  users: usersReducer,
  authentication: authenticationReducer
});