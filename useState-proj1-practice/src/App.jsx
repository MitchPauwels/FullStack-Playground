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


// ----------------------------------------------------------------------------------
