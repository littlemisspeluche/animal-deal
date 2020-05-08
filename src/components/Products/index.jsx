import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { default as JSON } from "../../Products.json";
import Card from "../Card/Card";
import style from "./Products.module.scss";
import { default as JSON_CATEGORIES } from "../../Categories.json";

export default function Products() {
	const { products } = JSON;
	const { data } = JSON_CATEGORIES;
	const [filterMenuVisible, setFilterMenuVisible] = useState(false);
	const [firstLevelState, setFirstLevelState] = useState("");
	const [secondLevelState, setSecondLevelState] = useState("");
	const [thirdLevelState, setThirdLevelState] = useState("");

	const menuCategories = data.menu;

	const toggleFilterMenu = () => {
		setFilterMenuVisible(!filterMenuVisible);
	};

	function firstLevelWasClicked(title) {
		if (firstLevelState === "") {
			setFirstLevelState(title);
		}
		// else if (firstLevelState !== title) {
		// 	setSecondLevelState(title);
		// }
		else {
			setFirstLevelState("");
		}
	}

	function secondLevelWasClicked(title) {
		if (secondLevelState === "") {
			setSecondLevelState(title);
		} else if (secondLevelState !== title) {
			setSecondLevelState(title);
		} else {
			setSecondLevelState("");
		}
	}
	function thirdLevelWasClicked(title) {
		if (thirdLevelState === "") {
			setThirdLevelState(title);
		} else if (thirdLevelState !== title) {
			setThirdLevelState(title);
		} else {
			setThirdLevelState("");
		}
	}

	const SubMenus = ({ title, subMenu }) => {
		return (
			<div>
				<p
					onClick={() => {
						firstLevelWasClicked(title);
					}}>
					{title}
				</p>
				{firstLevelState === title &&
					subMenu.map((subCategory, index) => {
						return (
							<div>
								<h5
									key={index}
									onClick={() => {
										secondLevelWasClicked(subCategory.title);
									}}>
									{subCategory.title}
								</h5>
								<ul>
									{subCategory.submenu &&
										subCategory.submenu.map((thirdLevelCategory, index) => {
											return (
												<li
													key={index}
													onClick={() => {
														thirdLevelWasClicked(thirdLevelCategory.title);
													}}>
													{thirdLevelCategory.title}
												</li>
											);
										})}
								</ul>
							</div>
						);
					})}
			</div>
		);
	};

	const FilteredProducts = () => {
		return products.map(singleProduct => {
			const { product_data } = singleProduct;
			const { animal_type, product_type, product_category } = product_data;
			if (
				animal_type === firstLevelState &&
				product_type === secondLevelState
			) {
				return (
					<div className={style["product-card"]}>
						<Card title={singleProduct.name} price={singleProduct.price} />
					</div>
				);
			} else if (animal_type === firstLevelState && !secondLevelState) {
				return (
					<div className={style["product-card"]}>
						<Card title={singleProduct.name} price={singleProduct.price} />
					</div>
				);
			}
		});
	};

	return (
		<div>
			<div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div>
						<button
							className={style.filterBtn}
							onClick={() => toggleFilterMenu()}>
							<FontAwesomeIcon icon="filter" />
						</button>
						{filterMenuVisible && (
							<div>
								<p>Products For</p>
								<div
									style={{
										height: "30rem",
										overflowY: "scroll",
										width: "100%",
										paddingRight: "4rem"
									}}>
									{menuCategories.map(({ title, submenu }) => (
										<SubMenus title={title} subMenu={submenu} />
									))}
								</div>
							</div>
						)}
					</div>
					<div>
						<input placeholder="sort by" />
					</div>
				</div>
			</div>
			<div className={style["products-container"]}>
				{firstLevelState ? (
					<FilteredProducts />
				) : (
					<div style={{ display: "flex", flexWrap: "wrap" }}>
						{products.map(product => (
							<div style={{ width: "50%" }}>
								<Card title={product.name} price={product.price} />
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
