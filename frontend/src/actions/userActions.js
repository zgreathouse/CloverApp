import axios from 'axios';

//action types
export const FETCH_USER = 'FETCH_USER';

//action which fetches the current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/currentUser');

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
