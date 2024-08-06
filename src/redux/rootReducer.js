import { combineReducers } from "redux";
import productsSlice from "./slices/productsSlice";

const rootReducer = combineReducers({
  products: productsSlice,
});

export default rootReducer;
