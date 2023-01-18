import React, { useState } from "react";

const HelloWorld = () => {
	const [name, setName] = useState("");

	const onChangeHandler = (e) => {
		setName(e.target.value);
	};

	return (
		<div className="container">
			<h2>Day 2: Message</h2>
			<label className="label" htmlFor="username" /> Enter your name:
			<input onChange={onChangeHandler} name="username" id="username" />
			<h4>Hello {name}</h4>
		</div>
	);
};

export default HelloWorld;
