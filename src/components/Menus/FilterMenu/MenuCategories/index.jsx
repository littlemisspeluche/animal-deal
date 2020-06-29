import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../../actions";
import SubMenu from "./SubMenu";
import style from "./MenuCategories.module.scss";

export default function MenuCategories({ categoryData }) {
	const { activeAnimalType, products, activeProductType } = useSelector(
		state => state.products
	);
	const dispatch = useDispatch();

	const filterByAnimalType = products.filter(obj => {
		return obj.product_data.animal_type === activeAnimalType;
	});

	// if (activeAnimalType === categoryData.title) {
	return (
		<div>
			{activeAnimalType === categoryData.title &&
				categoryData.submenu.map(category => (
					<div key={category.title}>
						<h5
							className={
								activeProductType === category.title
									? style.activeTitle
									: style.title
							}
							onClick={() => {
								dispatch(actions.products.setActiveProductType(category.title));
								dispatch(
									actions.products.getFilteredProducts(filterByAnimalType)
								);
							}}>
							{category.title}
						</h5>
						<SubMenu categoryData={category} />
					</div>
				))}
		</div>
	);
}
