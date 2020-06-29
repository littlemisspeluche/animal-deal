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

const getSortedProducts = products => ({
	type: "SORTED_PRODUCTS",
	payload: products
});

const getFilteredProducts = products => ({
	type: "FILTERED_PRODUCTS",
	payload: products
});

const setMainCategories = mainCategory => ({
	type: "MAIN_CATEGORIES",
	payload: mainCategory
});

export default {
	getProducts,
	setActiveAnimalType,
	setActiveProductType,
	setActiveProductCategory,
	getSortedProducts,
	getFilteredProducts,
	setMainCategories
};
