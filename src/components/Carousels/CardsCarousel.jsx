import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CardsCarousel({ children }) {
	const responsive = {
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

	return (
		<Carousel
			arrows={false}
			centerMode
			className=""
			containerClass="container"
			draggable
			infinite
			minimumTouchDrag={80}
			responsive={responsive}
			slidesToSlide={1}
			swipeable
			keyBoardControl={false}>
			{children}
		</Carousel>
	);
}
