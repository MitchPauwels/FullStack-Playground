import React, { useState } from "react";
import HelloWorld from "./HelloWorld";
import ToDoTwo from "./ToDoTwo";
import FormTwo from "./FormTwo";

const DayTwo = () => {
	return (
		<div className="day-container">
			<HelloWorld />
			<FormTwo />
			<ToDoTwo />
		</div>
	);
};

export default DayTwo;
