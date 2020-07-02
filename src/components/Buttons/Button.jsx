import React from "react";
import style from "./Button.module.scss";

export default function Button({ onClick, label }) {
	return (
		<button className={style["common-btn"]} onClick={onClick}>
			<span className={style["btn-label"]}>{label}</span>
		</button>
	);
}
