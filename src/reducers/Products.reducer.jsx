import * as actionTypes from "../actions/Products.actionsType";

const INITIAL_STATE = {
	products: null,
	activeAnimalType: null,
	activeProductType: null,
	activeProductCategory: null,
	sortedProductsList: null,
	filteredProducts: null
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};

		case "ACTIVE_ANIMAL_TYPE":
			return {
				...state,
				activeAnimalType: action.payload
			};
		case "ACTIVE_PRODUCT_TYPE":
			return {
				...state,
				activeProductType: action.payload
			};
		case "ACTIVE_PRODUCT_CATEGORY":
			return {
				...state,
				activeProductCategory: action.payload
			};
		case "SORTED_PRODUCTS":
			return {
				...state,
				sortedProductsList: action.payload
			};
		case "FILTERED_PRODUCTS":
			return {
				...state,
				filteredProducts: action.payload
			};

		default:
			return state;
	}
};
