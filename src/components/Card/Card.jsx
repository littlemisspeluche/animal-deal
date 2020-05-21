import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";

import style from "./Card.module.scss";

export default function Card({ id, title, price }) {
	const dispatch = useDispatch();
	const handleAddToCart = id => {
		dispatch(actions.cart.addToCart(id));
	};

	return (
		<div className={style.card}>
			<div className={style["card-img"]}>
				<img />
			</div>
			<div className={style["card-info"]}>
				<p className={style["card-title"]}>{title}</p>
				<p className={style["card-price"]}>${price}</p>
				<button onClick={() => handleAddToCart(id)}>add to cart</button>
			</div>
		</div>
	);
}
