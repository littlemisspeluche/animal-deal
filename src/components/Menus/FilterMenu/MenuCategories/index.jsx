import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../../actions";
import SubMenu from "./SubMenu";

export default function MenuCategories({ categoryData }) {
	const {
		activeAnimalType,
		activeProductType,
		products,
		filteredProducts
	} = useSelector(state => state.products);
	const dispatch = useDispatch();

	const filterByAnimalType = products.filter(obj => {
		return obj.product_data.animal_type === activeAnimalType;
	});

	if (activeAnimalType === categoryData.title) {
		return (
			<div>
				{categoryData.submenu.map(category => (
					<div>
						<p
							onClick={() => {
								dispatch(actions.products.setActiveProductType(category.title));
								dispatch(
									actions.products.getFilteredProducts(filterByAnimalType)
								);
							}}>
							{category.title}
						</p>
						{activeProductType === category.title && category.submenu && (
							<SubMenu categoryData={category} />
						)}
					</div>
				))}
			</div>
		);
	}
}
