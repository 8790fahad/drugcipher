import { combineReducers } from "redux";
import cartReducer from "./cart";
import accountReducer from "./recover";


const rootReducer = combineReducers({
  cart: cartReducer,
  account:accountReducer
});

export default rootReducer;
