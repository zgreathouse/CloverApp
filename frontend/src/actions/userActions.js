import axios from 'axios';

//action types
export const REDIRECT_USER = 'REDIRECT_USER';

//action which fetches the current user
export const redirectUser = () => async dispatch => {
  let payload = true;
  let res;

  if (window.location.search === "") {
    payload = false;
    res = await axios.get("/api");
    console.log(res.data);
  }

  dispatch({
    type: REDIRECT_USER,
    payload
  });
};
