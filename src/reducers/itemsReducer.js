import { LOAD_ITEMS } from '../actions/itemsActions';

const initialState = {
  conditions: [`new`, `like new`, `good`, `fair`, `salvage`],
  categories: [`electronics`, `vehicles`, `furniture`, `apparel`, `other`],
  items: []
}

export default  (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return { ...state, items: action.items };
    default:
      return state;
  }
}
