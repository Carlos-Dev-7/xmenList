import React from "react";
import { render } from "react-dom";

import "./css/styles.css";

const App = () => {
  	return (
  		<h1>
    		Hello World React and Node
  		</h1>
	);
};

render(
	<App/>,
	document.getElementById("app")
);
