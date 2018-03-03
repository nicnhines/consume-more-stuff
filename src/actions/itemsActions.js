import Axios from 'axios';
const HOST = '/api/items'; 

export const LOAD_ITEMS = `LOAD_ITEMS`;
export const LOAD_SINGLE_ITEM = `LOAD_SINGLE_ITEM`;
export const EDIT_ITEM = `EDIT_ITEM`;
export const ADD_ITEM = `ADD_ITEM`;
export const EDITING = `EDITING`;

export const loadItems = () => {
  return dispatch => {
    return Axios.get(HOST)
    .then(items => {
      dispatch({
        type: LOAD_ITEMS,
        items: items.data
      });
    })
  }
}

export const loadSingleItem = id => {
  return dispatch => {
    return Axios.get(`${HOST}/${id}`)
    .then(item => {
      dispatch({
        type: LOAD_SINGLE_ITEM,
        item: item.data
      })
    }) 
  }
}

export const addItem = (newItem) => {
  return dispatch => {
    return Axios.post(HOST, newItem)
    .then(newItemDetails => {
      if(newItemDetails.data && newItemDetails.data.id) {
        dispatch(loadItems())
      }
    })
  }
}

export const makeItemEditable = (id, editing) => {
  return (dispatch) => {
    return dispatch({
      type: editing,
      id: id,
      editing: editing
    })
  }
}

export const editItem = (updatedItem) => {
  return dispatch => {
    return Axios.put(`${HOST}/${updatedItem.id}`, updatedItem)
    .then(updatedItemDetails => {
      dispatch({
        type: EDIT_ITEM,
        updatedItem: updatedItemDetails.data
      })
    })
  }
}