import * as actionTypes from "../actions/Products.actionsType";

const productsData = (state = {}, action) => {
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

		default:
			return state;
	}
};

export default productsData;
