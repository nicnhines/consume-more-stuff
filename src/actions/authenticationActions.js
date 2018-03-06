import Axios from 'axios';

const HOST = `/api`;

export const SET_USER_ID = `SET_USER_ID`;
export const SET_USER_VALIDATION_ERROR = `SET_USER_VALIDATION_ERROR`;

export const login = (username, password) => {
  return dispatch => {
    return Axios.post(`${HOST}/login`, { username, password })
    .then(user => {
      localStorage.setItem(`user_id`, user.data.id);
      return dispatch({
        type: SET_USER_ID,
        id: user.data.id
      });
    })
    .catch(err => {
      return dispatch({
        type: SET_USER_VALIDATION_ERROR,
        error: `Invalid username or password`
      });
    });
  };
};

export const logout = () => {
  return dispatch => {
    return Axios.post(`${HOST}/logout`)
    .then(success => {
      localStorage.removeItem(`user_id`);
      dispatch({
        type: SET_USER_ID,
        id: null
      });
      return dispatch({
        type: SET_USER_VALIDATION_ERROR,
        error: ``
      });
    });
  };
};
