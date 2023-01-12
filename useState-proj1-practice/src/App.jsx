import "./App.css";
import React from 'react'

/*===========================
          EXERCISE
=============================*/
function App() {
      /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
  const result = React.useState()
  console.log(result);
	return (
		<div className="state">
			<h1 className="state--title">Is state important to know?</h1>
			<div className="state--value">
				<h1>Yes</h1>
			</div>
		</div>
	);
}

/*===========================
          ANSWER
=============================*/
// function App() {
// const result = React.useState('No')
// console.log(result);
// return (
// <div className="state">
//   <h1 className="state--title">Is state important to know?</h1>
//   <div className="state--value">
//     <h1>{result[0]}</h1>
//   </div>
// </div>
// );
// }

export default App;
