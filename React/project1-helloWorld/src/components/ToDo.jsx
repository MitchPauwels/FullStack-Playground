import React, { useState } from "react";

const ToDo = () => {
	// Saving the items
	const [items, setItems] = useState([]);
	// watching what is inside of input
	const [inputValue, setInputValue] = useState("");
	// Keeping track of completed items
	const [completedItems, setCompletedItems] = useState([]);

	// Function to handle the submit of the form
	const submitHandler = (e) => {
		e.preventDefault();
		setItems((prevItems) => [...prevItems, e.target.userInput.value]);
		// Reset input value
		setInputValue("");
	};
	// This keeps track on what we have inside of input
	const onChangeHandler = (e) => {
		setInputValue(e.target.value);
	};
	// Function to delete item
	const deleteItem = (index) => {
		setItems((prevItems) => {
			prevItems.splice(index, 1);
			return [...prevItems];
		});
	};

	// Function to mark complete
	const markComplete = (index) => {
		if (completedItems.includes(index)) {
			setCompletedItems(completedItems.filter((i) => i !== index));
		} else {
			setCompletedItems([...completedItems, index]);
		}
	};

	return (
		<form onSubmit={submitHandler} className="container">
			<div className="todo-container ">
				<h2>Day 1: ToDo</h2>
				<label htmlFor="userInput" className="todo-label" /> Add Item
				<input
					type="text"
					name="userInput"
					id="userInput"
					value={inputValue}
					onChange={onChangeHandler}
				/>
			</div>
			<button type="submit">Add Item</button>
			<ul>
				{items.map((item, index) => {
					return (
						<li
							key={index}
							className={completedItems.includes(index) ? "completed" : ""}
						>
							<input type="checkbox" onChange={() => markComplete(index)} />
							{item}
							<button onClick={() => deleteItem(index)}>Delete</button>
						</li>
					);
				})}
			</ul>
		</form>
	);
};

export default ToDo;
