import userRoot from "./userReducer";
import commonRoot from "./commonReducer";
import { combineReducers } from "redux";

const postmatchAppReducer = combineReducers({
  user: userRoot,
  common: commonRoot,
});

export default postmatchAppReducer;
