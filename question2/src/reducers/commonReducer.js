import { SEARCH, SAVE_POSTS } from "./actions/commonActions";

const initialState = { search: null };

function commonRoot(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.value };
    case SAVE_POSTS:
      return { ...state, posts: action.value };
    default:
      return state;
  }
}

export default commonRoot;
