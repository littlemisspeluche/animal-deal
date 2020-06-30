import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Pagination from "@material-ui/lab/Pagination";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Pagination from "@material-ui/lab/Pagination";

import style from "./Products.module.scss";
import FilterMenu from "../Menus/FilterMenu";
import SortMenu from "../Menus/SortMenu";
import Card from "../Card/Card";
import Header from "../Header";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(theme => ({
	// root: {
	// 	"& > *": {
	// 		marginTop: theme.spacing(2)
	// 	}
	// },
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper
	},
	item: {
		padding: theme.spacing(1.2)
	},
	avatar: { marginRight: theme.spacing(5) },
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
		sortedProductsList,
		activeAnimalType,
		activeProductType, // food
		activeProductCategory, //dry food
		filteredProducts
	} = useSelector(state => state.products);
	// console.log("Products -> activeProductType", activeProductType);
	// console.log("Products -> activeProductCategory", activeProductCategory);

	const { isMenuOpen } = useSelector(state => state.filters);

	const classes = useStyles();
	const itemsPerPage = 10;
	const [page, setPage] = React.useState(1);

	const roundPage =
		(filteredProducts && Math.round(filteredProducts.length / itemsPerPage)) ||
		(products && Math.round(products.length / itemsPerPage));

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

				{/* <div className={style["products-container"]}>
					{filteredProducts
						? filteredProducts.map(product => (
								<Card
									key={product.id}
									id={product.id}
									title={product.name}
									price={product.price}
								/>
						  ))
						: products &&
						  products.map(product => (
								<Card
									key={product.id}
									id={product.id}
									title={product.name}
									price={product.price}
								/>
						  ))}
				</div> */}

				<List dense compoent="span">
					{filteredProducts
						? filteredProducts
								.slice((page - 1) * itemsPerPage, page * itemsPerPage)
								.map(projectItem => {
									const labelId = `list-secondary-label-${projectItem.name}`;
									return (
										<ListItem
											key={projectItem.id}
											button
											onClick={() => console.log("")}>
											<ListItemText
												id={labelId}
												primary={projectItem.name}
												secondary={
													"Agile Metrics: B / Product Quality: A / Code Quality: A / Releases: C / Environment: A"
												}
												className={classes.item}
											/>
										</ListItem>
									);
								})
						: products &&
						  products
								.slice((page - 1) * itemsPerPage, page * itemsPerPage)
								.map(projectItem => {
									const labelId = `list-secondary-label-${projectItem.name}`;
									return (
										<ListItem
											key={projectItem.id}
											button
											onClick={() => console.log("")}>
											<ListItemText
												id={labelId}
												primary={projectItem.name}
												secondary={
													"Agile Metrics: B / Product Quality: A / Code Quality: A / Releases: C / Environment: A"
												}
												className={classes.item}
											/>
										</ListItem>
									);
								})}
				</List>
				<Divider />
				<Box component="span">
					<Pagination
						count={noOfPages}
						page={page}
						onChange={handleChange}
						defaultPage={1}
						color="primary"
						size="large"
						showFirstButton
						showLastButton
						classes={{ ul: classes.paginator }}
					/>
				</Box>

				{/* <div className={classes.root}>
					<Pagination count={10} variant="outlined" shape="rounded" />
				</div> */}
			</div>
			<Footer />
		</div>
	);
}
