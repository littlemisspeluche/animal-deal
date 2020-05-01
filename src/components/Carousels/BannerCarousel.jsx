import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./CustomDot";

export default function BannerCarousel({ children }) {
	const responsive = {
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

	return (
		<Carousel
			renderDotsOutside
			arrows={false}
			centerMode={false}
			className=""
			containerClass="container"
			minimumTouchDrag={80}
			responsive={responsive}
			showDots
			slidesToSlide={1}
			swipeable
			customDot={<CustomDot />}>
			{children}
		</Carousel>
	);
}
