import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuCategories from "./MenuCategories";
import actions from "../../../actions";
import FilterIcon from "../../../assets/icons/FilterIcon";
import style from "./FilterMenu.module.scss";

export default function FilterMenu() {
	const categoriesJSON = require("../../../data/Categories.json");
	const { menu } = categoriesJSON;

	const { categories, isMenuOpen } = useSelector(state => state.filters);

	const { activeAnimalType } = useSelector(state => state.products);
	const dispatch = useDispatch();

	const toggleFiltersMenu = () => {
		dispatch(actions.filters.toggleMenuCategories(!isMenuOpen));
		menu && dispatch(actions.filters.getCategories(menu));
	};

	return (
		<div>
			<button
				className={style["menu-button"]}
				onClick={() => toggleFiltersMenu()}>
				<FilterIcon height={"30px"} width={"30px"} />
			</button>
			<div className={style["menu-categories"]}>
				{isMenuOpen &&
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
		</div>
	);
}
