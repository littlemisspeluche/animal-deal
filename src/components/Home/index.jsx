import React, { useState } from "react";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerCarousel from "../Carousels/BannerCarousel";
import CardsCarousel from "../Carousels/CardsCarousel";

export function Button({ onClick, label }) {
	return (
		<button className={style["common-btn"]} onClick={onClick}>
			<span className={style["btn-label"]}>{label}</span>
		</button>
	);
}

const Card = ({ title, price }) => {
	return (
		<div className={style.card}>
			<div className="card-img">
				<img />
				<h4>{title}</h4>
				<p>{price}</p>
			</div>
		</div>
	);
};

const ShopCategory = ({ category }) => {
	return (
		<div className={style["shop-category"]}>
			<h4 className={style["shop-header"]}>Shop</h4>
			<h3 className={style["category-header"]}>{category}</h3>
			<Button onClick={() => console.log("clicked")} label={"Shop now"} />
		</div>
	);
};
export default function Home() {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.menu}>
					<FontAwesomeIcon icon="bars" />
				</div>
				<div className={style.logo}>
					<p>Logo</p>
				</div>
			</div>

			<div
				className={style["banner-slider"]}
				style={{
					paddingBottom: "30px",
					position: "relative"
				}}>
				<BannerCarousel>
					<div className={style["banner-item"]}>1</div>
					<div className={style["banner-item"]}>2</div>
					<div className={style["banner-item"]}>3</div>
					<div className={style["banner-item"]}>4</div>
				</BannerCarousel>
			</div>

			<div className={style["whats-new"]}>
				<h2>Whats new</h2>
				<CardsCarousel>
					<Card title={"Product 1"} price={"22"} />
					<Card title={"Product 2"} price={"18"} />
					<Card title={"Product 3"} price={"23"} />
					<Card title={"Product 4"} price={"22"} />
					<Card title={"Product 5"} price={"18.5"} />
				</CardsCarousel>
			</div>

			<div className={style["favorites"]}>
				<h2>Favorites</h2>
				<CardsCarousel>
					<Card title={"Product 1"} price={"22"} />
					<Card title={"Product 2"} price={"18"} />
					<Card title={"Product 3"} price={"23"} />
					<Card title={"Product 4"} price={"22"} />
					<Card title={"Product 5"} price={"18.5"} />
				</CardsCarousel>
			</div>

			<div className={style["shop-categories"]}>
				<ShopCategory category={"Dog"} />
				<ShopCategory category={"Cat"} />
			</div>

			<div
				style={{
					paddingBottom: "30px",
					position: "relative"
				}}
				className={style["special-offers"]}>
				<h2>Special Offers</h2>
				<div className="offer-card"></div>
				<BannerCarousel>
					<div className={style["offer-card"]}>1</div>
					<div className={style["offer-card"]}>2</div>
					<div className={style["offer-card"]}>3</div>
					<div className={style["offer-card"]}>4</div>
					<div className={style["offer-card"]}>5</div>
				</BannerCarousel>
			</div>

			<div className={style.newsletter}>
				<h2>newsletter</h2>
				<input placeholder="email@address.com" />
				<Button onClick={() => console.log("clicked")} label={"Subscribe"} />
			</div>
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
		</div>
	);
}
