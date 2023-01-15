import React, { useState } from "react";
import "../App.css";

const Counter = () => {
	const [count, setCount] = useState(0);
	const handleClick = (type) => {
		if (type === "increment") {
			setCount(count + 1);
		} else {
			if (count > 0) {
				setCount(count - 1);
			}
		}
	};

	return (
		<div className="count-container">
			<p>Count: {count}</p>
			<button onClick={() => handleClick("increment")}>Increment</button>
			<button onClick={() => handleClick("decrement")}>Decrement</button>
		</div>
	);
};

export default Counter;
