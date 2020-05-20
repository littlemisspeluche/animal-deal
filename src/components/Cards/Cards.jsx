import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";

export default function Cards() {
	const {
		products,
		activeAnimalType,
		activeProductType,
		activeProductCategory
	} = useSelector(state => state.products);

	const CardsContainer = ({ filteredList }) => {
		return filteredList.map(product => {
			return (
				<div style={{ width: "45%" }}>
					<Card title={product.name} price={product.price} />
				</div>
			);
		});
	};

	if (activeAnimalType && activeProductType && activeProductCategory) {
		const filterByProductCategory = products.filter(obj => {
			return (
				obj.product_data.product_type === activeProductType &&
				obj.product_data.animal_type === activeAnimalType &&
				obj.product_data.product_category === activeProductCategory
			);
		});
		return filterByProductCategory;
	} else if (activeAnimalType && activeProductType) {
		const filterByProductType = products.filter(obj => {
			return (
				obj.product_data.product_type === activeProductType &&
				obj.product_data.animal_type === activeAnimalType
			);
		});
		return filterByProductType;
	} else if (activeAnimalType) {
		const filterByAnimalType = products.filter(obj => {
			return obj.product_data.animal_type === activeAnimalType;
		});
		return filterByAnimalType;
	}
	return products;
}

// if (activeAnimalType && activeProductType && activeProductCategory) {
// 	const filterByProductCategory = products.filter(obj => {
// 		return (
// 			obj.product_data.product_type === activeProductType &&
// 			obj.product_data.animal_type === activeAnimalType &&
// 			obj.product_data.product_category === activeProductCategory
// 		);
// 	});
// 	return <CardsContainer filteredList={filterByProductCategory} />;
// } else if (activeAnimalType && activeProductType) {
// 	const filterByProductType = products.filter(obj => {
// 		return (
// 			obj.product_data.product_type === activeProductType &&
// 			obj.product_data.animal_type === activeAnimalType
// 		);
// 	});
// 	return <CardsContainer filteredList={filterByProductType} />;
// } else if (activeAnimalType) {
// 	const filterByAnimalType = products.filter(obj => {
// 		return obj.product_data.animal_type === activeAnimalType;
// 	});
// 	return <CardsContainer filteredList={filterByAnimalType} />;
// }
// return <CardsContainer filteredList={products} />;
