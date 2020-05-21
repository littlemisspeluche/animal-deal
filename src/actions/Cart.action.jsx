import * as actionType from "./Cart.actionType";

const getProducts = products => {
	return {
		type: actionType.GET_PRODUCTS,
		payload: products
	};
};
const addToCart = id => {
	return {
		type: actionType.ADD_TO_CART,
		payload: id
	};
};

const removeItem = id => {
	return {
		type: actionType.REMOVE_ITEM,
		payload: id
	};
};
const subtractQuantity = id => {
	return {
		type: actionType.SUB_QUANTITY,
		payload: id
	};
};
const addQuantity = id => {
	return {
		type: actionType.ADD_QUANTITY,
		payload: id
	};
};
const emptyCart = () => {
	return {
		type: actionType.EMPTY_CART
	};
};

export default {
	addToCart,
	getProducts,
	removeItem,
	subtractQuantity,
	addQuantity,
	emptyCart
};
