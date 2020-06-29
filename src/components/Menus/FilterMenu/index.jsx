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
	const { mainCategory } = useSelector(state => state.products);

	const { activeAnimalType } = useSelector(state => state.products);
	const dispatch = useDispatch();

	const toggleFiltersMenu = () => {
		dispatch(actions.filters.toggleMenuCategories(!isMenuOpen));
		menu && dispatch(actions.filters.getCategories(menu));
	};

	return (
		<div className={style.container}>
			<button
				className={style["menu-button"]}
				onClick={() => toggleFiltersMenu()}>
				<FilterIcon height={"30px"} width={"30px"} />
			</button>
			<div className={style["menu-categories"]}>
				{isMenuOpen && <h5 className={style.animalType}>Animal Type</h5>}
				{isMenuOpen &&
					categories.map(mainCategory => (
						<div key={mainCategory.title}>
							<h5
								className={
									activeAnimalType === mainCategory.title
										? style["selected-pet"]
										: style["non-selected-pet"]
								}
								onClick={() => {
									dispatch(actions.products.setMainCategories(mainCategory));
									activeAnimalType === mainCategory.title
										? dispatch(actions.products.setActiveAnimalType(null))
										: dispatch(
												actions.products.setActiveAnimalType(mainCategory.title)
										  );
								}}>
								{mainCategory.title}
							</h5>
						</div>
					))}
				{isMenuOpen && mainCategory && (
					<MenuCategories categoryData={mainCategory} />
				)}
			</div>
		</div>
	);
}
