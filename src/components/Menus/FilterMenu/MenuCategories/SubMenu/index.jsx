import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../../../actions";

export default function SubMenu({ categoryData }) {
	const dispatch = useDispatch();

	return (
		<div>
			{categoryData.submenu && (
				<div>
					{categoryData.submenu.map(category => (
						<h5
							style={{ fontWeight: "400", margin: "0.5rem 0" }}
							key={category.title}
							onClick={() => {
								dispatch(
									actions.products.setActiveProductCategory(category.title)
								);
								dispatch(
									actions.products.setActiveProductType(categoryData.title)
								);
							}}>
							{category.title}
						</h5>
					))}
				</div>
			)}
		</div>
	);
}
