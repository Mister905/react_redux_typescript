import { combineReducers } from "redux";
import character_reducer from "./character_reducer";

export default combineReducers({
  character: character_reducer
});
