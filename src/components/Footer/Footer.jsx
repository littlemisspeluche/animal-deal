import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
	return (
		<div className={style.footer}>
			<ul>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Search</a>
				</li>
				<li>
					<a href="#">Contact us</a>
				</li>
				<li>
					<a href="#">TBD</a>
				</li>
			</ul>
		</div>
	);
}
