import React, { useState } from "react";
import HelloStranger from "./HelloStranger";
import FormThree from "./FormThree";
import ToDoThree from "./ToDoThree";

const DayThree = () => {
	return (
		<div className="day-container">
			<HelloStranger />
			<FormThree />
			<ToDoThree />
		</div>
	);
};

export default DayThree;
