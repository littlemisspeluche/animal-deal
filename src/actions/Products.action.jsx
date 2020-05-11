import * as actionType from "./Products.actionsType";

const getProducts = products => {
	return {
		type: actionType.GET_PRODUCTS,
		payload: products
	};
};

const getAnimalType = categoryId => ({
	type: "ACTIVE_ANIMAL_TYPE",
	payload: categoryId
});

const getProductType = categoryId => ({
	type: "ACTIVE_PRODUCT_TYPE",
	payload: categoryId
});

const getProductCategory = categoryId => ({
	type: "ACTIVE_PRODUCT_CATEGORY",
	payload: categoryId
});

export default {
	getProducts,
	getAnimalType,
	getProductType,
	getProductCategory
};
