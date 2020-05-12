import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions";
import SubMenu from "./SubMenu";

export default function MenuCategories({ categoryData }) {
	const { activeAnimalType, activeProductType } = useSelector(
		state => state.products
	);
	const dispatch = useDispatch();

	if (activeAnimalType === categoryData.title) {
		return (
			<div>
				{categoryData.submenu.map(category => (
					<div>
						<p
							onClick={() =>
								dispatch(actions.products.setActiveProductType(category.title))
							}>
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
