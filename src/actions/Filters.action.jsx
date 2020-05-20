import * as actionType from "./Filters.actionType";

const getActiveSortingOption = activeOption => {
	return {
		type: actionType.SORT_BY,
		payload: activeOption
	};
};

const getCategories = categories => {
	return { type: actionType.GET_CATEGORIES, payload: categories };
};

// const addFilterCategory = categories => ({
// 	type: "ADD_FILTER",
// 	payload: categories
// });

export default {
	getCategories,
	getActiveSortingOption
};
