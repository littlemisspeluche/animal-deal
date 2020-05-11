import filterMenu from "./Filters.reducer";
import productsData from "./Products.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	filterMenu,
	productsData
});

export default rootReducer;
