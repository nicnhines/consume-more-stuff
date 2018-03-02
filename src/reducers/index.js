import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import pageDisplayReducer from './pageDisplayReducer';

export default combineReducers({
  pageDisplay: pageDisplayReducer,
  items: itemsReducer
});