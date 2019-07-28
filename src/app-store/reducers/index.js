import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { pageListReducer } from "./page";

export default combineReducers({
  pageList: pageListReducer,
  form: formReducer
});
