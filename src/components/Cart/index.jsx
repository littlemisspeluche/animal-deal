import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import style from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuantityButton from "../Buttons/QuantityButton";
export default function Cart() {
	const dispatch = useDispatch();

	const { addedItems, total } = useSelector(state => state.cart);

	//to remove the item completely
	const handleRemove = id => {
		dispatch(actions.cart.removeItem(id));
	};

	//to add the quantity
	const handleAddQuantity = id => {
		dispatch(actions.cart.addQuantity(id));
	};
	//to substruct from the quantity
	const handleSubtractQuantity = id => {
		dispatch(actions.cart.subtractQuantity(id));
	};

	return (
		<div className={style.container}>
			<div className={style.cart}>
				<h5>Your Order:</h5>
				<ul className={style.collection}>
					{addedItems &&
						addedItems.map(item => {
							{
								/* console.log("Cart -> item", item); */
							}
							return (
								<li className={style["item-card"]} key={item.id}>
									<div className={style["item-img"]}>
										<img src={item.image} alt={item.name} />
									</div>
									<div className={style["item-desc"]}>
										<span className={style.title}>{item.name}</span>
										<p>{item.description.split(".")[0]}.</p>
										<p>
											<b>Price: {item.price * item.quantity}$</b>
										</p>

										{/* <QuantityButton item={item} /> */}
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
										<button
											className={style["remove-btn"]}
											onClick={() => handleRemove(item.id)}>
											Remove
										</button>
									</div>
								</li>
							);
						})}
				</ul>
			</div>
			<div>
				<p>
					<b>Total: {total.toFixed(2)} $</b>
				</p>
			</div>
		</div>
	);
}
