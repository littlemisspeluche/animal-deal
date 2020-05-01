import React from "react";
import style from "./CustomDot.module.scss";

export default function CustomDot({ onMove, index, onClick, active }) {
	return (
		<li
			className={active ? style.active : style.inactive}
			onClick={() => onClick()}></li>
	);
}
