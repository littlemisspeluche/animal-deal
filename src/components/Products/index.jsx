import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import style from "./Products.module.scss";
import FilterMenu from "../Menus/FilterMenu";
import SortMenu from "../Menus/SortMenu";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function Products() {
	const productJSON = require("../../data/Products.json");

	const dispatch = useDispatch();

	const { data } = productJSON;

	const {
		products,
		sortedProductsList,
		activeAnimalType,
		activeProductType,
		activeProductCategory,
		filteredProducts
	} = useSelector(state => state.products);
	useEffect(() => {
		dispatch(actions.products.getProducts(data));
		dispatch(actions.cart.getProducts(data));
	}, []);

	const getProductsByActiveAnimalType = () => {
		if (activeAnimalType) {
			const filtered = products.filter(obj => {
				return obj.product_data.animal_type === activeAnimalType;
			});
			dispatch(actions.products.getFilteredProducts(filtered));
			return filtered;
		}
	};

	useEffect(() => {
		getProductsByActiveAnimalType();
	}, [activeAnimalType]);

	const getProductsByActiveProductType = () => {
		if (activeAnimalType && activeProductType) {
			const filtered = filteredProducts.filter(obj => {
				return (
					obj.product_data.product_type === activeProductType &&
					obj.product_data.animal_type === activeAnimalType
				);
			});
			dispatch(actions.products.getFilteredProducts(filtered));
			return filtered;
		}
	};

	useEffect(() => {
		getProductsByActiveProductType();
	}, [activeProductType]);

	const getProductsByActiveProductCategory = () => {
		if (activeAnimalType && activeProductType && activeProductCategory) {
			const filtered = filteredProducts.filter(obj => {
				return (
					obj.product_data.product_type === activeProductType &&
					obj.product_data.animal_type === activeAnimalType &&
					obj.product_data.product_category === activeProductCategory
				);
			});
			dispatch(actions.products.getFilteredProducts(filtered));
			return filtered;
		}
	};

	useEffect(() => {
		getProductsByActiveProductCategory();
	}, [activeProductCategory]);

	return (
		<div className={style.container}>
			<div className={style.header}>
				<FilterMenu />
				<SortMenu />
			</div>

			<div className={style["products-container"]}>
				<Link to="/cart">CART</Link>
				{filteredProducts
					? filteredProducts.map(product => (
							<div style={{ width: "45%" }}>
								<Card
									id={product.id}
									title={product.name}
									price={product.price}
								/>
							</div>
					  ))
					: products &&
					  products.map(product => (
							<div style={{ width: "45%" }}>
								<Card
									id={product.id}
									title={product.name}
									price={product.price}
								/>
							</div>
					  ))}
			</div>
		</div>
	);
}
