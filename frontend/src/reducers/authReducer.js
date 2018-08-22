
import { REDIRECT_USER } from '../actions/userActions';

const authReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case REDIRECT_USER:
      return action.payload;

    default:
      return state;
  }
}

export default authReducer;
