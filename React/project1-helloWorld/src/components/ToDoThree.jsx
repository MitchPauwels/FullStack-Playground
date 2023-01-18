import React, { useState } from "react";

const ToDoThree = () => {
	const [items, setItems] = useState([]);
	const [input, setInput] = useState("");

	const onChangeHandler = (e) => {
		setInput(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setItems((prevItems) => [...prevItems, e.target.addItem.value]);
		setInput("");
	};

	return (
		<form onSubmit={onSubmitHandler} className="container">
			<h2>Day 3: ToDo</h2>
			<label className="label" htmlFor="addItem" />
			<input
				onChange={onChangeHandler}
				name="addItem"
				id="addItem"
				value={input}
			/>
			<button className="button">Add Item</button>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</form>
	);
};

export default ToDoThree;
