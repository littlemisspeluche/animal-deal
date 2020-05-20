import * as actionTypes from "../actions/Cart.actionType";
import { useSelector } from "react-redux";

const INITIAL_STATE = {
	items: null,
	addedItems: [],
	total: 0
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.GET_PRODUCTS:
			return {
				...state,
				items: action.payload
			};
		case actionTypes.ADD_TO_CART:
			let addedItem = state.items.find(item => item.id === action.payload);
			let existed_item = state.addedItems.find(
				item => action.payload === item.id
			);
			if (existed_item) {
				addedItem.quantity += 1;
				return {
					...state,
					total: state.total + addedItem.price
				};
			} else {
				addedItem.quantity = 1;
				//calculating the total
				let newTotal = state.total + addedItem.price;

				return {
					...state,
					addedItems: [...state.addedItems, addedItem],
					total: newTotal
				};
			}

		default:
			return state;
	}
};
