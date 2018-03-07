import { LOAD_ITEMS, LOAD_SINGLE_ITEM, EDIT_ITEM, ADD_ITEM } from '../actions/itemsActions';

const initialState = {
  conditions: [`new`, `like new`, `good`, `fair`, `salvage`],
  categories: [`electronics`, `vehicles`, `furniture`, `apparel`, `other`],
  items: [],
  singleItem: {}
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return { ...state, items: action.items };
    
    case LOAD_SINGLE_ITEM:
      return { ...state, singleItem: action.item };

    case ADD_ITEM:
      return { ...state, items: action.item }

    case EDIT_ITEM:
      return { ...state, singleItem: action.updatedItem}


    default:
      return state;
  }
}
