import * as actionTypes from "../actions/Filters.actionType";

const INITIAL_STATE = {
	categories: null,
	activeOption: null,
	isMenuOpen: false
	// categoriesList: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.SORT_BY:
			return { ...state, activeOption: action.payload };

		case actionTypes.GET_CATEGORIES:
			return {
				...state,
				categories: action.payload
			};
		case actionTypes.IS_MENU_CATEGORIES_OPEN:
			return { ...state, isMenuOpen: action.payload };

		default:
			return state;
	}
};
