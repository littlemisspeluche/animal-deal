import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../../actions";

export default function SubMenu({ categoryData }) {
	const { activeProductType } = useSelector(state => state.products);
	const dispatch = useDispatch();
	if (activeProductType === categoryData.title && categoryData.submenu) {
		return (
			<div>
				{categoryData.submenu.map(category => (
					<div
						onClick={() =>
							dispatch(
								actions.products.setActiveProductCategory(category.title)
							)
						}>
						{category.title}
					</div>
				))}
			</div>
		);
	}
}
