import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../actions";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./QuantityButton.module.scss";

export default function QuantityButton({ item }) {
	const dispatch = useDispatch();
	const { addedItems, total } = useSelector(state => state.cart);
	console.log("QuantityButton -> addedItems", addedItems);
	//to add the quantity
	// const handleAddQuantity = id => {
	// 	dispatch(actions.cart.addQuantity(id));
	// };
	// //to substruct from the quantity
	// const handleSubtractQuantity = id => {
	// 	dispatch(actions.cart.subtractQuantity(id));
	// };

	return (
		<div className={style["quantity-container"]}>
			<Link to="/cart">
				<FontAwesomeIcon
					icon="angle-up"
					onClick={e => {
						e.preventDefault();
						// dispatch(actions.cart.addQuantity(item.id));
						// handleAddQuantity(item.id);

						dispatch(actions.cart.addToCart(item.id));
					}}
				/>
			</Link>
			<p>
				<b>Quantity: {item.quantity}</b>
			</p>
			<Link to="/cart">
				<FontAwesomeIcon
					icon="angle-down"
					onClick={e => {
						e.preventDefault();
						dispatch(actions.cart.subtractQuantity(item.id));
						// handleSubtractQuantity(item.id);
					}}
				/>
			</Link>
		</div>
	);
}
