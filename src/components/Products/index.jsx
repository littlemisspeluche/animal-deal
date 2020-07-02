import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import { Link } from "react-router-dom";
import { makeStyles, Divider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

import style from "./Products.module.scss";
import FilterMenu from "../Menus/FilterMenu";
import SortMenu from "../Menus/SortMenu";
import Card from "../Card/Card";
import Header from "../Header";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper
	},
	item: {
		padding: theme.spacing(1.2)
	},
	paginator: {
		justifyContent: "center",
		padding: "10px"
	}
}));
export default function Products() {
	const productJSON = require("../../data/Products.json");

	const dispatch = useDispatch();

	const { data } = productJSON;

	const {
		products,
		// sortedProductsList,
		activeAnimalType,
		activeProductType, // food
		activeProductCategory, //dry food
		filteredProducts
	} = useSelector(state => state.products);

	// const { isMenuOpen } = useSelector(state => state.filters);

	const classes = useStyles();
	const itemsPerPage = 10;
	const [page, setPage] = React.useState(1);

	const roundPage = filteredProducts
		? Math.round(filteredProducts.length / itemsPerPage)
		: products && Math.round(products.length / itemsPerPage);

	const [noOfPages, setNoOfPages] = useState();

	useEffect(() => {
		setNoOfPages(roundPage);
	}, [filteredProducts || products]);

	const handleChange = (event, value) => {
		setPage(value);
	};
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
		} else if (activeAnimalType === null) {
			dispatch(actions.products.getFilteredProducts(products));
			return products;
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
			const filtered = products.filter(obj => {
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
		<div>
			<Header />
			<div className={style.banner}></div>
			<div className={style.container}>
				<div className={style.header}>
					<FilterMenu />
					<SortMenu />
				</div>
				<Link to="/cart">CART</Link>

				<div className={style["products-container"]}>
					{filteredProducts
						? filteredProducts
								.slice((page - 1) * itemsPerPage, page * itemsPerPage)
								.map(product => {
									const labelId = `list-secondary-label-${product.name}`;
									return (
										<Card
											key={product.id}
											productData={product}
											// className={classes.item}
										/>
									);
								})
						: products &&
						  products
								.slice((page - 1) * itemsPerPage, page * itemsPerPage)
								.map(product => {
									const labelId = `list-secondary-label-${product.name}`;
									return (
										<Card
											key={product.id}
											productData={product}
											// className={classes.item}
										/>
									);
								})}
				</div>

				<Divider />
				{noOfPages ? (
					<Pagination
						count={noOfPages}
						page={page}
						onChange={handleChange}
						defaultPage={1}
						variant="outlined"
						shape="rounded"
						classes={{ ul: classes.paginator }}
					/>
				) : (
					""
				)}
			</div>
			<Footer />
		</div>
	);
}
