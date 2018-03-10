import { LOAD_SINGLE_USER } from '../actions/usersActions';

const initialState = {
  singleUser: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case LOAD_SINGLE_USER:
      return { ...state, singleUser: action.user };
    default:
      return state;
  }
}
