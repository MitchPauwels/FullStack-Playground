import { useState } from "react";
import HelloMessage from "./components/HelloMessage";
import HelloStranger from "./components/HelloStranger";
import HeloWorld from "./components/HelloWorld";
import Form from "./components/Form";
import ToDo from "./components/ToDo";
import ToDoTwo from "./components/ToDoTwo";
import ToDoThree from "./components/ToDoThree";
import FormTwo from "./components/FormTwo";
import FormThree from "./components/FormThree";
import "./App.css";

function App() {
	const [name, setName] = useState("User");

	const handleChange = (e) => {
		setName(e.target.value);
	};

	return (
		<div className="app-container">
			<div className="helloMessage-container container">
				<h1 className="helloMessage-title align-center">
					Project 1: HelloMessage
				</h1>
				<label htmlFor="userName" id="userName-label">
					Enter your name:
				</label>
				<input
					type="text"
					name="userName"
					id="userName"
					onChange={handleChange}
					placeholder="Your Name"
				></input>
				<HelloMessage name={name} />
			</div>
			<Form />
			<ToDo />
			<HelloStranger />
			<FormTwo />
			<ToDoTwo />
			<HeloWorld />
			<ToDoThree />
			<FormThree />
		</div>
	);
}

export default App;
