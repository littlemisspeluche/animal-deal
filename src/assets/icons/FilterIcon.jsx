import React from "react";
import style from "./FilterIcon.module.scss";
export default function FilterIcon() {
	return (
		<div className={style.Group}>
			<div className={style.Ellipse3}></div>
			<div className={style.Ellipse2}></div>
			<div className={style.Ellipse1}></div>
			<div className={style.Rectangle1}></div>
			<div className={style.Rectangle2}></div>
			<div className={style.Rectangle3}></div>
		</div>
	);
}
