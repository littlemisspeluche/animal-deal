import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions/SubMenus.actions";
export default function SubMenus() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, []);
	return <div></div>;
}
