import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions";

export default function SortMenu() {
	const { ascPrice, descPrice, ascName, ascPopularity } = useSelector(
		state => state.filter
	);

	const productJSON = require("../../../data/Products.json");

	const dispatch = useDispatch();

	const { data } = productJSON;

	const { products } = useSelector(state => state.products);
	useEffect(() => {
		dispatch(actions.products.getProducts(data));
	}, []);

	const sortByPriceAsc = () =>
		products && products.slice().sort((a, b) => a.price - b.price);

	const sortByPriceDesc = () =>
		products && products.sort((a, b) => a.price - b.price).reverse();

	return (
		<div>
			<select
				onChange={e => {
					console.log(e.target.value);
				}}>
				<option value="" disabled selected>
					Sort by
				</option>

				<option value={"priceASC"}>Price high to low</option>
				<option value={"priceDESC"}>Price low to high</option>
				<option value={"alphabetically"}>Name</option>
				<option value={"popularity"}>Popularity</option>
			</select>
		</div>
	);
}
