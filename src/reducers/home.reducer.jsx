import * as actionTypes from "../actions/home.actionType";

const INITIAL_STATE = {
	isLoading: false,
	items: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.GET_DATA:
			return {
				...state,
				isLoading: true
			};
		case actionTypes.GET_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				items: action.result
			};
		case actionTypes.GET_DATA_ERROR:
			return {
				...state,
				isLoading: false
			};

		default:
			return state;
	}
};
