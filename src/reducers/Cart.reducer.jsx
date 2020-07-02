import * as actionTypes from "../actions/Cart.actionType";

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
		case actionTypes.REMOVE_ITEM:
			let itemToRemove = state.addedItems.find(
				item => action.payload === item.id
			);
			let new_items = state.addedItems.filter(
				item => action.payload !== item.id
			);

			//calculating the total
			let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
			console.log(itemToRemove);
			return {
				...state,
				addedItems: new_items,
				total: newTotal
			};
		case actionTypes.ADD_QUANTITY:
			let newItemQnt = state.items.find(item => item.id === action.payload);
			newItemQnt.quantity += 1;
			let totalAfterAdding = state.total + newItemQnt.price;
			return {
				...state,
				total: totalAfterAdding
			};
		case actionTypes.SUB_QUANTITY:
			let itemSubQnt = state.items.find(item => item.id === action.payload);
			//if the qt == 0 then it should be removed
			if (itemSubQnt.quantity === 1) {
				let new_items = state.addedItems.filter(
					item => item.id !== action.payload
				);
				let newTotal = state.total - itemSubQnt.price;
				return {
					...state,
					addedItems: new_items,
					total: newTotal
				};
			} else {
				itemSubQnt.quantity -= 1;
				let newTotal = state.total - itemSubQnt.price;
				return {
					...state,
					total: newTotal
				};
			}

		default:
			return state;
	}
};
