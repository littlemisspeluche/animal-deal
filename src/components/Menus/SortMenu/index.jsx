import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions";
// import _ from "lodash";
import style from "./SortMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SortMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const { activeOption } = useSelector(state => state.filters);
	const { products, filteredProducts } = useSelector(state => state.products);

	const dispatch = useDispatch();

	const sortByPriceAsc =
		(filteredProducts &&
			filteredProducts.slice().sort((a, b) => a.price - b.price)) ||
		(products && products.slice().sort((a, b) => a.price - b.price));

	const sortByPriceDesc =
		(filteredProducts &&
			filteredProducts.slice().sort((a, b) => b.price - a.price)) ||
		(products && products.slice().sort((a, b) => b.price - a.price));

	const sortAlphabetically =
		(filteredProducts &&
			filteredProducts.slice().sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			})) ||
		(products &&
			products.slice().sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			}));

	const sortByPopularity = () => {
		// products.map(({ product_reviews }) => {
		// _.filter(product_reviews, function ({ rating }) {
		// 	console.log(rating);
		// });
		// });
	};

	const handleSortProducts = () => {
		if (activeOption) {
			if (activeOption === "priceASC") {
				dispatch(actions.products.getFilteredProducts(sortByPriceAsc));
			} else if (activeOption === "priceDESC") {
				dispatch(actions.products.getFilteredProducts(sortByPriceDesc));
			} else if (activeOption === "alphabetically") {
				dispatch(actions.products.getFilteredProducts(sortAlphabetically));
			} else if (activeOption === "popularity") {
				sortByPopularity();
				// dispatch(actions.products.getFilteredProducts(sortByPopularity));
			}
		}
	};
	useEffect(() => {
		handleSortProducts();
	}, [activeOption]);

	return (
		<div>
			<div>
				<ul
					className={style["btn-container"]}
					onClick={() => setMenuOpen(!menuOpen)}>
					<li className={style["sort-btn"]} id={style["sort-btn"]}>
						sort by
						<FontAwesomeIcon icon="sort" />
						{menuOpen && (
							<ul className={style.options}>
								<li
									className={style["sort-btn"]}
									onClick={() =>
										dispatch(
											actions.filters.getActiveSortingOption("priceDESC")
										)
									}>
									Price high to low
								</li>
								<li
									className={style["sort-btn"]}
									onClick={() =>
										dispatch(actions.filters.getActiveSortingOption("priceASC"))
									}>
									Price low to high
								</li>
								<li
									className={style["sort-btn"]}
									onClick={() =>
										dispatch(
											actions.filters.getActiveSortingOption("alphabetically")
										)
									}>
									Name
								</li>
								{/* <li
									className={style["sort-btn"]}
									onClick={() =>
										dispatch(
											actions.filters.getActiveSortingOption("popularity")
										)
									}>
									Popularity
								</li> */}
							</ul>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}
