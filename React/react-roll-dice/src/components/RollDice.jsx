import React, { useState } from "react";
import History from './History';
import "../App.css";

const RollDice = () => {
	const [dice1, setDice1] = useState(1);
	const [dice2, setDice2] = useState(1);

	const [history, setHistory] = useState([]);


	const handleRoll = () => {
		setDice1(Math.floor(Math.random() * 6) + 1);
		setDice2(Math.floor(Math.random() * 6) + 1);
		setHistory(prevHistory => [...prevHistory, {dice1,dice2}])
	};

	return (
		<div className="dice-container">
		<History history={history}/>
			<div className="dices">
				<div className="dice">{dice1}</div>
				<div className="dice">{dice2}</div>
			</div>

			<button className="button" onClick={handleRoll}>
				Roll Dice
			</button>
		</div>
	);
};

export default RollDice;
