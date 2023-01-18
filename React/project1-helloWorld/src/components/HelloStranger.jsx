import React, { useState } from "react";

const HelloStranger = () => {
	const [name, setName] = useState("");

	const onChangeHandler = (e) => {
		setName(e.target.value);
	};

	return (
		<div className="container">
			<h2>Day 3: Message</h2>
			<label htmlFor="username" className="label" />
			Enter Your name:
			<input
				type="text"
				name="username"
				id="username"
				onChange={onChangeHandler}
			/>
			<h4>Hello {name}</h4>
		</div>
	);
};

export default HelloStranger;
