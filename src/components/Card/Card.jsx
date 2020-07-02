import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import actions from "../../actions";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const useStyles = makeStyles(theme => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflow: "scroll"
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

const StyledRating = withStyles({
	iconFilled: {
		color: "#5885AF"
	},
	iconHover: {
		color: "#41729F"
	}
})(Rating);

export default function Card({ productData }) {
	const dispatch = useDispatch();
	const averageRating = id => {
		let rating = [];
		let average = 0;
		if (productData.product_reviews.length > 1 && productData.id === id) {
			for (let i = 0; i < productData.product_reviews.length; i++) {
				rating.push(parseInt(productData.product_reviews[i].rating));
			}
			average = rating.reduce(function (a, b) {
				return a + b / productData.product_reviews.length;
			}, 0);
			return average;
		} else {
			average = 0;
			return average;
		}
	};

	const handleAddToCart = id => {
		for (let i = 1; i <= clicks; i++) {
			dispatch(actions.cart.addToCart(id));
		}
	};

	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [clicks, setClicks] = useState(1);
	const [readMoreClicked, setReadMoreClicked] = useState(false);

	return (
		<div className={style.card}>
			<div className={style["card-img"]}>
				<img alt={productData.name} />
			</div>
			<div className={style["card-info"]}>
				<p className={style["card-title"]}>{productData.name}</p>
				<p className={style["card-price"]}>${productData.price}</p>
				<button
					onClick={() => dispatch(actions.cart.addToCart(productData.id))}>
					Add To Cart
				</button>
				<button
					onClick={() => {
						setOpen(true);
					}}>
					Open Product Modal
				</button>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={() => setOpen(false)}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500
					}}>
					<Fade in={open}>
						<div className={classes.paper}>
							<div>
								<img
									style={{ width: "230px", height: "250px" }}
									alt={productData.name}
									src={productData.image[0]}
								/>
							</div>
							<h2 id="transition-modal-title">{productData.name}</h2>
							<p id="transition-modal-description"></p>
							<Box component="fieldset" mb={3} borderColor="transparent">
								<StyledRating
									name="customized-color"
									defaultValue={averageRating(productData.id)}
									precision={0.5}
									emptyIcon={<StarBorderIcon fontSize="inherit" />}
								/>
							</Box>
							<p>{productData.price}</p>
							<p>{productData.original_price}</p>
							{readMoreClicked ? (
								<p>
									{productData.description}
									<button onClick={() => setReadMoreClicked(!readMoreClicked)}>
										Read Less
									</button>
								</p>
							) : (
								<p>
									{productData.description.split(".")[0]}.
									<button onClick={() => setReadMoreClicked(!readMoreClicked)}>
										Read More
									</button>
								</p>
							)}
							<div>
								<div>
									<FontAwesomeIcon
										icon="angle-up"
										onClick={() => {
											setClicks(clicks + 1);
										}}
									/>
									<p>
										<b>{clicks || 1}</b>
									</p>
									<FontAwesomeIcon
										icon="angle-down"
										onClick={() => {
											clicks > 1 && setClicks(clicks - 1);
										}}
									/>
								</div>
								<button onClick={() => handleAddToCart(productData.id)}>
									Add To Cart
								</button>
							</div>
							<div>
								<p>
									Categories:
									<span> {productData.product_data.animal_type}, </span>
									<span>{productData.product_data.product_type}, </span>
									<span>{productData.product_data.product_category}</span>
								</p>
							</div>
						</div>
					</Fade>
				</Modal>
			</div>
		</div>
	);
}
