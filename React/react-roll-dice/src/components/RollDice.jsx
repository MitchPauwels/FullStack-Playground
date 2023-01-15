import React, { useState } from "react";
import "../App.css";

const Toggle = () => {
	const [isOn, setIsOn] = useState(false);

	return (
		<div className="toggle-container">
			<button onClick={() => setIsOn(isOn => !isOn)}>
				{isOn? 'ON' : 'OFF'}
			</button>
			{isOn && <p>{isOn? 'The toggle is on' : 'The toggle is off'}</p>}
		</div>
	);
};

export default Toggle;
