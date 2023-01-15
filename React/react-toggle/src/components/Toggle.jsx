import React, { useState,useEffect } from "react";
import "../App.css";

const Toggle = () => {
	const [isOn, setIsOn] = useState(false);
	const [mode, setMode] = useState('light')

	const handleClick = () => {
		setIsOn(!isOn);
		if (mode === 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	}
	

	useEffect(() => {
	  document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black'
	
	  return () => {
		document.body.style.color = mode === 'light' ? 'black' : 'white'

	  }
	}, [mode])
	

	return (
		<div className="toggle-container">
			<button onClick={handleClick}>
				{isOn? 'ON' : 'OFF'}
			</button>
			{isOn && <p>{isOn? 'The toggle is on' : 'The toggle is off'}</p>}
		</div>
	);
};

export default Toggle;
