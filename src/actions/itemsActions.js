import Axios from 'axios';
const HOST = '/api/items'; 

export const LOAD_ITEMS = `LOAD_ITEMS`;
export const LOAD_SINGLE_ITEM = `LOAD_SINGLE_ITEM`;

export const loadItems = () => {
  return dispatch => {
    return Axios.get(HOST)
    .then(items => {
      console.log(`items`, items)
      dispatch({
        type: LOAD_ITEMS,
        items: items.data
      });
    })
  }
}

export const loadSingleItem = (id) => {
  return dispatch => {
    return Axios.get(`${HOST}/${id}`)
    .then(item => {
      console.log(`item`, item.data)
      dispatch({
        type: LOAD_SINGLE_ITEM,
        item: item.data
      })
    }) 
  }
}