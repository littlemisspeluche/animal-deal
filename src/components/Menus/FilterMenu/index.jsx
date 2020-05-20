import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuCategories from "./MenuCategories";
import actions from "../../../actions";

export default function FilterMenu() {
	const categoriesJSON = require("../../../data/Categories.json");
	const { menu } = categoriesJSON;

	const [isFilterMenuOpen, setIFilterMenuOpen] = useState(false);

	const { categories, activeOption } = useSelector(state => state.filters);

	const { activeAnimalType } = useSelector(state => state.products);
	const dispatch = useDispatch();

	const toggleFiltersMenu = () => {
		menu && dispatch(actions.filters.getCategories(menu));

		setIFilterMenuOpen(!isFilterMenuOpen);
	};

	return (
		<div>
			<button onClick={() => toggleFiltersMenu()}>Filters Menu</button>
			{isFilterMenuOpen &&
				categories.map(mainCategory => (
					<div>
						<h5
							onClick={() =>
								dispatch(
									actions.products.setActiveAnimalType(mainCategory.title)
								)
							}>
							{mainCategory.title}
						</h5>
						{activeAnimalType === mainCategory.title && (
							<MenuCategories categoryData={mainCategory} />
						)}
					</div>
				))}
		</div>
	);
}
