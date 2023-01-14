import "./App.css";
import React from 'react'

/*====================================
          EXERCISE PART 1 - useState
======================================*/
// function App() {
//       /**
//      * Challenge: Replace our hard-coded "Yes" on the page with 
//      * some state initiated with React.useState()
//      */
//   const result = React.useState()
//   console.log(result);
// 	return (
// 		<div className="state">
// 			<h1 className="state--title">Is state important to know?</h1>
// 			<div className="state--value">
// 				<h1>Yes</h1>
// 			</div>
// 		</div>
// 	);
// }

/*===========================
          ANSWER - useState
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

// ----------------------------------------------------------------------------------

/*==========================================
          EXERCISE PART 2 - Destructuring
==============================================*/
// function App() {
// //      * Challenge: Deconstructure the state and call it isImportant,func
// //      */
// const result = React.useState()
// console.log(result);
// return (
// <div className="state">
//   <h1 className="state--title">Is state important to know?</h1>
//   <div className="state--value">
//     <h1>Yes</h1>
//   </div>
// </div>
// );
// }

// export default App;

/*==========================================
          Answer PART 2 - Destructuring
==============================================*/
// function App() {
//   //      * Challenge: Deconstructure the state and call it isImportant,func
//   //      */
//   const [isImportant, func] = React.useState('Yes')
//   console.log(isImportant);
//   return (
//   <div className="state">
//     <h1 className="state--title">Is state important to know?</h1>
//     <div className="state--value">
//       <h1>{isImportant}</h1>
//     </div>
//   </div>
//   );
//   }
  
//   export default App;


// ----------------------------------------------------------------------------------


/*==========================================
          EXERCISE PART 3 - Changing State 
==============================================*/

// export default function App() {
//     const [isImportant, setIsImportant] = React.useState("Yes")
//     /**
//      * Challenge: 
//      * 1. Create a function called `handleClick` that runs
//      *    setIsImportant("No")
//      * 2. add a click event listener to the div.state--value
//      *    that runs `handleClick` when the div is clicked.
//      */
    
//     function handleClick() {
        
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div onClick={handleClick} className="state--value">
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }

/*==========================================
          Answer PART 3 - Changing State 
==============================================*/

// export default function App() {
//   const [isImportant, setIsImportant] = React.useState("Yes")
//   /**
//    * Challenge: 
//    * 1. Create a function called `handleClick` that runs
//    *    setIsImportant("No")
//    * 2. add a click event listener to the div.state--value
//    *    that runs `handleClick` when the div is clicked.
//    */
  
//   function handleClick() {
//       setIsImportant('No')
//   }
  
//   return (
//       <div className="state">
//           <h1 className="state--title">Is state important to know?</h1>
//           <div onClick={handleClick} className="state--value">
//               <h1>{isImportant}</h1>
//           </div>
//       </div>
//   )
// }

/*==========================================
          EXERCISE PART 4 - TERNARY PRACTICE
==============================================*/

// export default function App() {
//     /**PART 1
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */
        /** PART 2
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
//     const isGoingOut = true
    
//     let answer  // Use ternary here
//     if(isGoingOut === true) {
//         answer = "Yes"
//     } else {
//         answer = "No"
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value">
//                 <h1>{answer}</h1>
//             </div>
//         </div>
//     )
// }

/*==========================================
          ANSWER PART 4 - TERNARY PRACTICE
==============================================*/

// export default function App() {
//     /** PART 1
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */

//         /** PART 2
//      * Challenge: move our ternary directly inside of the JSX
//      * so the "Yes" and "No" are determined inside the <h1>
//      * 
//      * Hint: you will no longer need the `answer` variable
//      */
//     const isGoingOut = true
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value">
//                 <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
//             </div>
//         </div>
//     )
// }

/*==========================================
          EXERCISE PART 5 - TERNARY PRACTICE
==============================================*/
// export default function App() {
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value">
//                 <h1>Yes</h1>
//             </div>
//         </div>
//     )
// }
/*=============================================
          ANSWER PART 5 - TERNARY PRACTICE
==============================================*/
// export default function App() {
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */

//     const [isGoingOut, setIsGoingOut] = React.useState(true)

//     function handleClick() {
//         setIsGoingOut(prevState => prevState ? false : true)
//     }
    
//     return (
//         <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value" onClick={handleClick}>
//                 <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
//             </div>
//         </div>
//     )
// }

