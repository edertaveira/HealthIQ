import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actions/userActions";

const initialState = {};

function userRoot(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      const newState = {};
      newState.clientId = action.clientId;
      return { ...state, ...newState };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}

export default userRoot;
