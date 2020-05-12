import * as actionType from "./Products.actionsType";

const getProducts = products => {
	return {
		type: actionType.GET_PRODUCTS,
		payload: products
	};
};

const setActiveAnimalType = categoryId => ({
	type: "ACTIVE_ANIMAL_TYPE",
	payload: categoryId
});

const setActiveProductType = categoryId => ({
	type: "ACTIVE_PRODUCT_TYPE",
	payload: categoryId
});

const setActiveProductCategory = categoryId => ({
	type: "ACTIVE_PRODUCT_CATEGORY",
	payload: categoryId
});

export default {
	getProducts,
	setActiveAnimalType,
	setActiveProductType,
	setActiveProductCategory
};
