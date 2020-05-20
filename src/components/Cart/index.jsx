import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import style from "./Cart.module.scss";
export default function Cart() {
	const dispatch = useDispatch();

	const { addedItems } = useSelector(state => state.cart);

	return (
		<div className={style.container}>
			<div className={style.cart}>
				<h5>Your Order:</h5>
				<ul className={style.collection}>
					{addedItems &&
						addedItems.map(item => (
							<li className={style["item-card"]} key={item.id}>
								<div className={style["item-img"]}>
									<img src={item.image} alt={item.name} />
								</div>
								<div className={style["item-desc"]}>
									<span className={style.title}>{item.name}</span>
									<p>{item.description}</p>
									<p>
										<b>Price: {item.price}$</b>
									</p>
									<p>
										<b>Quantity: {item.quantity}</b>
									</p>
									<div className={style["quantity-container"]}></div>
									<button className={style["remove-btn"]}>Remove</button>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
}
