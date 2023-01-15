import React from "react";

const History = ({ history })  => {
	return (
		<div>
			<h3>History</h3>
			<ul>
				{history.map((roll, index) => (
					<li key={index}>
						Turn {index + 1} = {roll.dice1} - {roll.dice2}
					</li>
				))}
			</ul>
		</div>
	);
};

export default History