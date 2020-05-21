import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faBars,
	faFilter,
	faAngleUp,
	faAngleDown,
	faSort
} from "@fortawesome/free-solid-svg-icons";
import Cart from "./components/Cart";

library.add(faBars, faFilter, faAngleUp, faAngleDown, faSort);

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/products">
					<Products />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
