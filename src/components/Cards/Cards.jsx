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

	if (activeAnimalType && activeProductType && activeProductCategory) {
		const filterByProductCategory = products.filter(obj => {
			return (
				obj.product_data.product_type === activeProductType &&
				obj.product_data.animal_type === activeAnimalType &&
				obj.product_data.product_category === activeProductCategory
			);
		});
		return filterByProductCategory.map(product => {
			return <Card title={product.name} price={product.price} />;
		});
	} else if (activeAnimalType && activeProductType) {
		const filterByProductType = products.filter(obj => {
			return (
				obj.product_data.product_type === activeProductType &&
				obj.product_data.animal_type === activeAnimalType
			);
		});
		return filterByProductType.map(product => {
			return <Card title={product.name} price={product.price} />;
		});
	} else if (activeAnimalType) {
		const filterByAnimalType = products.filter(obj => {
			return obj.product_data.animal_type === activeAnimalType;
		});
		return filterByAnimalType.map(product => {
			return <Card title={product.name} price={product.price} />;
		});
	}
	return products.map(product => {
		return <Card title={product.name} price={product.price} />;
	});
}
