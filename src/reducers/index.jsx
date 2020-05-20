import filters from "./Filters.reducer";
import products from "./Products.reducer";
import cart from "./Cart.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	filters,
	products,
	cart
});

export default rootReducer;
