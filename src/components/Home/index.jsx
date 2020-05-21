import React from "react";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerCarousel from "../Carousels/BannerCarousel";
import CardsCarousel from "../Carousels/CardsCarousel";
import Card from "../Card/Card";
import ShopBanner from "../ShopBanner";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header";

export default function Home() {
	return (
		<div className={style.container}>
			<Header />

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
					<Card title={"Product 1"} price={"22"} id={1} />
					<Card title={"Product 2"} price={"18"} id={2} />
					<Card title={"Product 3"} price={"23"} id={3} />
					<Card title={"Product 4"} price={"22"} id={4} />
					<Card title={"Product 5"} price={"18.5"} id={5} />
				</CardsCarousel>
			</div>

			<div className={style["favorites"]}>
				<h2>Favorites</h2>
				<CardsCarousel>
					<Card title={"Product 1"} price={"22"} id={6} />
					<Card title={"Product 2"} price={"18"} id={7} />
					<Card title={"Product 3"} price={"23"} id={8} />
					<Card title={"Product 4"} price={"22"} id={9} />
					<Card title={"Product 5"} price={"18.5"} id={10} />
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
