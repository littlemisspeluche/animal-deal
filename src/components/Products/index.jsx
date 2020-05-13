import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import Cards from "../Cards/Cards";
import style from "./Products.module.scss";
import FilterMenu from "../Menus/FilterMenu";
import SortMenu from "../Menus/SortMenu";

export default function ProductsNew() {
	const productJSON = require("../../data/Products.json");

	const dispatch = useDispatch();

	const { data } = productJSON;

	const { products } = useSelector(state => state.products);

	useEffect(() => {
		dispatch(actions.products.getProducts(data));
	}, []);

	return (
		<div>
			<FilterMenu />
			<SortMenu />

			<div className={style["products-container"]}>{products && <Cards />}</div>
		</div>
	);
}
