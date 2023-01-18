import React, {useState} from "react";
import ToDo from "./ToDo";
import HelloMessage from "./HelloMessage";
import Form from "./Form";

const DayOne = () => {
    const [name, setName] = useState("User");

	const handleChange = (e) => {
		setName(e.target.value);
	};
	return (
		<div className="day-container">
			<div className="helloMessage-container container">
				<h2 className="helloMessage-title align-center">
					Day 1: Message
				</h2>
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
		</div>
	);
};

export default DayOne;
