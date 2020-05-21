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

const toggleMenuCategories = isMenuOpen => ({
	type: actionType.IS_MENU_CATEGORIES_OPEN,
	payload: isMenuOpen
});

export default {
	getCategories,
	getActiveSortingOption,
	toggleMenuCategories
};
