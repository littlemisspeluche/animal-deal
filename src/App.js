import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faFilter);

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
			</Switch>
		</Router>
	);
}

export default App;
