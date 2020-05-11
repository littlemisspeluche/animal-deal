import * as actionType from "./Filters.actionType";

// const sortByPrice = value => {
// 	return { type: actionType.SORT_BY_PRICE, payload: value };
// };

// const filterByPrice = value => {
// 	return { type: actionType.FILTER_BY_PRICE, payload: value };
// };

// const sortAlphabetically = value => {
// 	return { type: actionType.SORT_ALPHABETICALLY, payload: value };
// };

const getCategories = categories => {
	return { type: actionType.LOAD_DATA, payload: categories };
};

export default {
	// sortByPrice,
	// filterByPrice,
	// sortAlphabetically,
	getCategories
};
