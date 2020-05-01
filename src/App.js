import React from "react";
import Home from "./components/Home";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
