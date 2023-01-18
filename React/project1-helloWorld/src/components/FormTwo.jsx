import React, { useState } from "react";

const FormTwo = () => {
const [formData, setFormData] = useState({})

const onChangeHandler = (e) => {
    const {name, value} = e.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name] : value
    }))
}

const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formData);
}

	return (
		<form className="container" onSubmit={onSubmitHandler}>
			<h2>Day 2: Form</h2>
			<label htmlFor="firstName" /> Enter Name:
			<input onChange={onChangeHandler} type="text" name="firstName" id="firstName" />
			<label htmlFor="email" />
			Email:
			<input onChange={onChangeHandler} type="email" name="email" id="email" />
			<label htmlFor="password" />
			Password:
			<input onChange={onChangeHandler} type="password" name="password" id="password" />
			<button type="submit">Send</button>
		</form>
	);
};

export default FormTwo