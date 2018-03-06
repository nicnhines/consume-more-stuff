import { SET_USER_ID, SET_USER_VALIDATION_ERROR } from '../actions/authenticationActions';


const initialState = {
  user_id: null,
  error: ``
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, user_id: action.id };
    case SET_USER_VALIDATION_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}