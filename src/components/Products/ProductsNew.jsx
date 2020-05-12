import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";
import Cards from "../Cards/Cards";

import _ from "lodash";
import FiltersMenu from "../FiltersMenu";

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
			<FiltersMenu />

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
					<div
						style={{
							width: "50%"
						}}>
						{products && <Cards />}
					</div>
				</div>
			</div>
		</div>
	);
}
