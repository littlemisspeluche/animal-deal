import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import actions from "../../actions";

import style from "./Card.module.scss";

const useStyles = makeStyles(theme => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

export default function Card({ id, title, price }) {
	const dispatch = useDispatch();
	const handleAddToCart = id => {
		dispatch(actions.cart.addToCart(id));
	};

	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpenModal = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={style.card}>
			<div className={style["card-img"]}>
				<img />
			</div>
			<div className={style["card-info"]}>
				<p className={style["card-title"]}>{title}</p>
				<p className={style["card-price"]}>${price}</p>
				<button onClick={() => handleAddToCart(id)}>Add To Cart</button>
				<button onClick={handleOpenModal}>Open Product Modal</button>
				<Modal
					aria-labelledby="transition-modal-title"
					aria-describedby="transition-modal-description"
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500
					}}>
					<Fade in={open}>
						<div className={classes.paper}>
							<h2 id="transition-modal-title">Transition modal</h2>
							<p id="transition-modal-description">{title}</p>
						</div>
					</Fade>
				</Modal>
			</div>
		</div>
	);
}
