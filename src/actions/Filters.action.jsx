import * as actionType from "./Filters.actionType";

const sortProductsByPriceASC = ascPrice => {
	return { type: actionType.SORT_PRODUCTS_PRICE_ASC, payload: ascPrice };
};
const sortProductsByPriceDESC = descPrice => {
	return { type: actionType.SORT_PRODUCTS_PRICE_DESC, payload: descPrice };
};
const sortProductsAlphabetically = ascName => {
	return { type: actionType.SORT_PRODUCTS_ALPHABETICALLY, payload: ascName };
};
const sortProductsByPopularity = ascPopularity => {
	return {
		type: actionType.SORT_PRODUCTS_BY_POPULARITY,
		payload: ascPopularity
	};
};

const getCategories = categories => {
	return { type: actionType.LOAD_DATA, payload: categories };
};

export default {
	sortProductsByPriceASC,
	sortProductsByPriceDESC,
	sortProductsAlphabetically,
	sortProductsByPopularity,
	getCategories
};
