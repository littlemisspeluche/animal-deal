import filter from "./Filters.reducer";
import products from "./Products.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	filter,
	products
});

export default rootReducer;
