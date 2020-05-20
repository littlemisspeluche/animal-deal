import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions";

export default function SortMenu() {
	const { activeOption } = useSelector(state => state.filters);

	const dispatch = useDispatch();

	const { products, filteredProducts } = useSelector(state => state.products);

	const sortByPriceAsc =
		(filteredProducts &&
			filteredProducts.slice().sort((a, b) => a.price - b.price)) ||
		(products && products.slice().sort((a, b) => a.price - b.price));

	const sortByPriceDesc =
		(filteredProducts &&
			filteredProducts.slice().sort((a, b) => b.price - a.price)) ||
		(products && products.slice().sort((a, b) => b.price - a.price));

	const handleSortProducts = () => {
		if (activeOption) {
			if (activeOption === "priceASC") {
				dispatch(actions.products.getFilteredProducts(sortByPriceAsc));
			} else if (activeOption === "priceDESC") {
				dispatch(actions.products.getFilteredProducts(sortByPriceDesc));
			}
		}
	};
	useEffect(() => {
		handleSortProducts();
	}, [activeOption]);

	return (
		<div>
			<form>
				<select
					onChange={event => {
						dispatch(
							actions.filters.getActiveSortingOption(event.target.value)
						);
					}}>
					<option value="" selected disabled>
						Sort by
					</option>

					<option value={"priceDESC"}> Price high to low</option>
					<option value={"priceASC"}>Price low to high</option>
					<option value={"alphabetically"}>Name</option>
					<option value={"popularity"}>Popularity</option>
				</select>
			</form>
		</div>
	);
}
