import * as actionTypes from "../actions/Filters.actionType";

const INITIAL_STATE = {
	categories: null
	// isLoading: false
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// case actionTypes.SORT_ALPHABETICALLY:
		// 	return {
		// 		...state
		// 	};
		// case actionTypes.SORT_BY_PRICE:
		// 	return { ...state };
		// case actionTypes.FILTER_BY_PRICE:
		// 	return {
		// 		...state
		// 	};
		case actionTypes.LOAD_DATA:
			return {
				...state,
				categories: action.payload
			};

		default:
			return state;
	}
};
