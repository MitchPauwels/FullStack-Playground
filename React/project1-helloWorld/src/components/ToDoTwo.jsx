import React, { useState } from "react";

const ToDoTwo = () => {
const [items, setItems] = useState([])
const [input, setInput] = useState('')

const onChangeHandler = (e) =>{
    setInput(e.target.value)
}

const onSubmitHandler = (e) => {
    e.preventDefault()
    setItems(prevItems => (
        [...prevItems, e.target.addItem.value]
    ))
    setInput('')
} 


	return (
		<form className="container" onSubmit={onSubmitHandler}>
			<label htmlFor="addItem" className="label" />
			<input onChange={onChangeHandler} type="text" name="addItem" id="addItem" value={input} />
			<button className="button">Add Item</button>
            <ul>
                {items.map(item => {
                  return <li>{item}</li>
                })}
            </ul>
		</form>
        
	);
};

export default ToDoTwo;
