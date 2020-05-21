import React from "react";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
	return (
		<div className={style.header}>
			<div className={style.menu}>
				<FontAwesomeIcon icon="bars" />
			</div>
			<div className={style.logo}>
				<p>LOGO</p>
			</div>
		</div>
	);
}
