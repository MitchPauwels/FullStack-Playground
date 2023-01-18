import React, { useState } from "react";

const ToDo = () => {
    // Saving the items
	const [items, setItems] = useState([]);
    // watching what is inside of input
    const [inputValue, setInputValue] = useState('');

    const submitHandler = (e) => {
		e.preventDefault();
		setItems((prevItems) => (
			[...prevItems,
			e.target.userInput.value]
		));
        // Reset input value
        setInputValue('');
	};
    // This keeps track on what we have inside of input
    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
    }


	return (
			<form onSubmit={submitHandler} className="container">
				<div className="todo-container ">
					<h2>
						Day 1: ToDo
						
					</h2>
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
                    {items.map((item,index) => {
                      return  <li key={index}>{item}</li>
                    })}
                </ul>
			</form>

	);
};

export default ToDo;
