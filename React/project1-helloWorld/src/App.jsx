import { useState } from "react";
import HelloMessage from "./components/HelloMessage";
import HelloStranger from "./components/HelloStranger";
import HeloWorld from "./components/HelloWorld";
import Form from "./components/Form";
import ToDo from "./components/ToDo";
import ToDoTwo from "./components/ToDoTwo";
import ToDoThree from "./components/ToDoThree";
import FormTwo from "./components/FormTwo";
import DayOne from "./components/DayOne";
import DayTwo from "./components/DayTwo";
import DayThree from "./components/DayThree";
import "./App.css";

function App() {
	return (
		<div className="app-container">
			<DayOne />
			<DayTwo />
			<DayThree />
		</div>
	);
}

export default App;
