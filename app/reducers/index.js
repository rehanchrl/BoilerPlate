import { combineReducers } from "redux";

import { loading, success, failed, logged } from "./processor";
//import { categoryproduct } from "./categoryproduct"; //example

const rootReducers = combineReducers({
  loading,
  logged,
  success,
  failed
});

export default rootReducers;
