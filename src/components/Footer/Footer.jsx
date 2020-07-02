import React from "react";
import style from "./Footer.module.scss";

export default function Footer() {
	return (
		<div className={style.footer}>
			<ul>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/search">Search</a>
				</li>
				<li>
					<a href="/contactUs">Contact us</a>
				</li>
				<li>
					<a href="tbd">TBD</a>
				</li>
			</ul>
		</div>
	);
}
