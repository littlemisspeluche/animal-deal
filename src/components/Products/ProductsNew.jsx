import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";
import { default as PRODUCTS } from "../../data/Products.json";
import { default as CATEGORIES } from "../../data/Categories.json";
import Card from "../Card/Card";
import _ from "lodash";

export default function ProductsNew() {
	const { products } = PRODUCTS;
	const { menu } = CATEGORIES;

	const [isFilterMenuOpen, setIFilterMenuOpen] = useState(false);

	const dispatch = useDispatch();
	const filterMenu = useSelector(state => state.filterMenu);
	const productsData = useSelector(state => state.productsData);

	useEffect(() => {
		dispatch(allActions.products.getProducts(products));
	}, []);

	const toggleFiltersMenu = () => {
		setIFilterMenuOpen(!isFilterMenuOpen);
		dispatch(allActions.filters.getCategories(menu));
	};

	return (
		<div>
			<button onClick={() => toggleFiltersMenu()}>
				{/* <FontAwesomeIcon icon="filter" /> */}
				Filters Menu
			</button>
			<div>
				{isFilterMenuOpen &&
					filterMenu.categories &&
					filterMenu.categories.map(mainCategory => (
						<div>
							<h5
								onClick={() =>
									dispatch(
										allActions.products.getAnimalType(mainCategory.title)
									)
								}>
								{mainCategory.title}
							</h5>
							{productsData.activeAnimalType === mainCategory.title && (
								<div>
									{mainCategory.submenu.map(category => {
										return (
											<div
												onClick={() =>
													dispatch(
														allActions.products.getProductType(category.title)
													)
												}>
												{category.title}
												{productsData.activeAnimalType === mainCategory.title &&
													productsData.activeProductType === category.title &&
													category.submenu.map(subCategory => {
														return (
															<div
																onClick={() =>
																	dispatch(
																		allActions.products.getProductCategory(
																			subCategory.title
																		)
																	)
																}>
																{subCategory.title}
															</div>
														);
													})}
											</div>
										);
									})}
								</div>
							)}
						</div>
					))}
			</div>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap"
				}}>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap"
					}}>
					{productsData.products &&
						productsData.products.map(product => (
							<div
								style={{
									width: "50%"
								}}>
								{/* {productsData.activeAnimalType ===
									product.product_data.animal_type && (
									<Card title={product.name} price={product.price} />
								)} 
                // sort products by ACTIVE animal_type
                */}

								{/* {productsData.activeAnimalType ===
									product.product_data.animal_type &&
									productsData.activeProductType ===
										product.product_data.product_type && (
										<Card title={product.name} price={product.price} />
										// sort products by ACTIVE product_type
									)} */}

								{productsData.activeAnimalType ===
									product.product_data.animal_type &&
									productsData.activeProductType ===
										product.product_data.product_type &&
									productsData.activeProductCategory ===
										product.product_data.product_category && (
										<Card title={product.name} price={product.price} />
										// sort products by ACTIVE product_Category
									)}
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
