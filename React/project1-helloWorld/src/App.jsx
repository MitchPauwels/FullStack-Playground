import { useState } from "react";
import HelloMessage from "./components/HelloMessage";
import Form from './components/Form'
import ToDo from './components/ToDo'
import HelloStranger from './components/HelloStranger'
import AnotherForm from './components/AnotherForm'


import "./App.css";

function App() {
	const [name, setName] = useState("User");

	const handleChange = (e) => {
		setName(e.target.value);
	};

	return (
		<div className="app-container">
    <div className="helloMessage-container container">
    <h1 className="helloMessage-title align-center">Project 1: HelloMessage</h1>
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
			<HelloMessage name={name}/>
    </div>
      <Form />
      <ToDo />
      <HelloStranger />
      <AnotherForm/>
		</div>
	);
}

export default App;
