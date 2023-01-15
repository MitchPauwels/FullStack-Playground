import React, { useState } from "react";
import "../App.css";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="name">
					{" "}
					Name:
					<input
						className="form-input"
						type="text"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleChange}
					></input>
				</label>
				<br />
				<label htmlFor="email">
					{" "}
					Email:
					<input
						className="form-input"
						type="email"
						name="email"
						id="email"
						value={formData.email}
						onChange={handleChange}
					></input>
				</label>
				<br />
				<label htmlFor="password">
					{" "}
					Password:
					<input
						className="form-input"
						type="password"
						name="password"
						id="password"
						value={formData.password}
						onChange={handleChange}
					></input>
				</label>
				<br />
				<button className="form-submit" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Form;
