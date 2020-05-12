import React from "react";
import style from "./Card.module.scss";

export default function Card({ title, price }) {
	return (
		<div className={style.card}>
			<div className={style["card-img"]}>
				<img />
			</div>
			<div className={style["card-info"]}>
				<p className={style["card-title"]}>{title}</p>
				<p className={style["card-price"]}>${price}</p>
			</div>
		</div>
	);
}
