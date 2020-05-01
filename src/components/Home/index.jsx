import React, { useState } from "react";
import style from "./Home.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Button({ onClick, label }) {
	return (
		<button className={style["common-btn"]} onClick={onClick}>
			<span className={style["btn-label"]}>{label}</span>
		</button>
	);
}

const responsiveCards = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024
		},
		items: 3,
		partialVisibilityGutter: 40
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0
		},
		items: 1,
		partialVisibilityGutter: 30
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464
		},
		items: 2,
		partialVisibilityGutter: 30
	}
};

const responsiveBanner = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024
		},
		items: 1
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0
		},
		items: 1
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464
		},
		items: 1
	}
};

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
				<div className={style.menu}></div>
				<div className={style.logo}></div>
			</div>

			<div className={style["banner-slider"]}>
				<Carousel
					arrows={false}
					centerMode={false}
					className=""
					containerClass="container"
					minimumTouchDrag={80}
					responsive={responsiveBanner}
					showDots
					slidesToSlide={1}
					swipeable>
					<div className={style["banner-item"]}>1</div>
					<div className={style["banner-item"]}>2</div>
					<div className={style["banner-item"]}>3</div>
					<div className={style["banner-item"]}>4</div>
				</Carousel>
			</div>

			<div className={style["whats-new"]}>
				<h2>Whats new</h2>
				<Carousel
					arrows
					centerMode
					className=""
					containerClass="container"
					draggable
					infinite
					minimumTouchDrag={80}
					responsive={responsiveCards}
					slidesToSlide={1}
					swipeable
					keyBoardControl={false}>
					<Card title={"Product 1"} price={"22"} />
					<Card title={"Product 2"} price={"18"} />
					<Card title={"Product 3"} price={"23"} />
					<Card title={"Product 4"} price={"22"} />
					<Card title={"Product 5"} price={"18.5"} />
				</Carousel>
			</div>

			<div className={style["favorites"]}>
				<h2>Favorites</h2>
				<Carousel
					arrows
					centerMode
					className=""
					containerClass="container"
					draggable
					infinite
					minimumTouchDrag={80}
					responsive={responsiveCards}
					slidesToSlide={1}
					swipeable
					keyBoardControl={false}>
					<Card title={"Product 1"} price={"22"} />
					<Card title={"Product 2"} price={"18"} />
					<Card title={"Product 3"} price={"23"} />
					<Card title={"Product 4"} price={"22"} />
					<Card title={"Product 5"} price={"18.5"} />
				</Carousel>
			</div>

			<div className={style["shop-categories"]}>
				<ShopCategory category={"Dog"} />
				<ShopCategory category={"Cat"} />
			</div>

			<div className={style["special-offers"]}>
				<h2>Special Offers</h2>
				<div className="offer-card"></div>
				<Carousel
					arrows={false}
					centerMode={false}
					className=""
					containerClass="container"
					minimumTouchDrag={80}
					responsive={responsiveBanner}
					showDots
					slidesToSlide={1}
					swipeable>
					<div className={style["offer-card"]}>1</div>
					<div className={style["offer-card"]}>2</div>
					<div className={style["offer-card"]}>3</div>
					<div className={style["offer-card"]}>4</div>
					<div className={style["offer-card"]}>5</div>
				</Carousel>
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
