import React, { useState } from "react";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerCarousel from "../Carousels/BannerCarousel";
import CardsCarousel from "../Carousels/CardsCarousel";
import Card from "../Cards/Card/Card";
import ShopBanner from "../ShopBanner/ShopBanner";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

export default function Home() {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.menu}>
					<FontAwesomeIcon icon="bars" />
				</div>
				<div className={style.logo}>
					<p>LOGO</p>
				</div>
			</div>

			<div className={style["banner-slider"]}>
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
				<ShopBanner category={"Dog"} />
				<ShopBanner category={"Cat"} />
			</div>

			<div className={style["special-offers"]}>
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
				<Button onClick={() => {}} label={"Subscribe"} />
			</div>

			<Footer />
		</div>
	);
}
