import React from "react";
import style from "./ShopBanner.module.scss";
import Button from "../Button/Button";

export default function ShopBanner({ category }) {
	return (
		<div className={style["shop-category"]}>
			<span className={style["shop-header"]}>
				<h4>Shop</h4>
				<h3 className={style["category-header"]}>{category}</h3>
			</span>
			<span className={style["shop-btn"]}>
				<Button onClick={() => {}} label={"Shop now"} />
			</span>
		</div>
	);
}
