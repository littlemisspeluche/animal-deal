import * as actionTypes from "../actions/Filters.actionType";

const INITIAL_STATE = {
	categories: null,
	ascPrice: null,
	descPrice: null,
	ascName: null,
	ascPopularity: null
	// isLoading: false
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.SORT_PRODUCTS_PRICE_ASC:
			return { ...state, ascPrice: action.payload };
		case actionTypes.SORT_PRODUCTS_PRICE_DESC:
			return { ...state, descPrice: action.payload };
		case actionTypes.SORT_PRODUCTS_ALPHABETICALLY:
			return { ...state, ascName: action.payload };
		case actionTypes.SORT_PRODUCTS_BY_POPULARITY:
			return { ...state, ascPopularity: action.payload };

		case actionTypes.LOAD_DATA:
			return {
				...state,
				categories: action.payload
			};

		default:
			return state;
	}
};
