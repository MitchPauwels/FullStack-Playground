import React from 'react'
import './App.css'


/*============================================
          EXERCISE PART 1 - useState 
==============================================*/

export default function App() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  return (
      <div className="counter">
          <button className="counter--minus">–</button>
          <div className="counter--count">
              <h1>0</h1>
          </div>
          <button className="counter--plus">+</button>
      </div>
  )
}

/*============================================
          ANSWER PART 1 - useState
==============================================*/

// export default function App() {
//   /**
//    * Challenge: Set up state to track our count (initial value is 0)
//    */
//   const [count, setCount] = React.useState(5)

//   return (
//       <div className="counter">
//           <button className="counter--minus">–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus">+</button>
//       </div>
//   )
// }


// ----------------------------------------------------------------------------------

/*============================================
          EXERCISE PART 2 - useState
==============================================*/

// export default function App() {
//     /**
//      * Challenge: Create a function called `add` that runs
//      * when the + button is clicked. (Can just console.log("add") for now)
//      */
//   const [count, setCount] = React.useState(5)

//   return (
//       <div className="counter">
//           <button className="counter--minus">–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus">+</button>
//       </div>
//   )
// }

/*============================================
          ANSWER PART 2 - useState
==============================================*/

// export default function App() {
//   /**
//    * Challenge: Create a function called `add` that runs
//    * when the + button is clicked. (Can just console.log("add") for now)
//    */
// const [count, setCount] = React.useState(5)

// function add() {
//   console.log('add')
// }
// return (
//     <div className="counter">
//         <button className="counter--minus">–</button>
//         <div className="counter--count">
//             <h1>{count}</h1>
//         </div>
//         <button onClick={add} className="counter--plus">+</button>
//     </div>
// )
// }

/*============================================
          EXERCISE PART 3 - useState
==============================================*/

// export default function App() {
//   /**
//    * Challenge: 
//    * See if you can think of a way to add 1 to the count
//    * every time the + button is clicked
//    */
//   const [count, setCount] = React.useState(0)
  
//   function add() {
//       setCount(1)
//   }
  
//   return (
//       <div className="counter">
//           <button className="counter--minus">–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus" onClick={add}>+</button>
//       </div>
//   )
// }

/*============================================
          ANSWER PART 3 - useState
==============================================*/

// export default function App() {
//   /**
//    * Challenge: 
//    * See if you can think of a way to add 1 to the count
//    * every time the + button is clicked
//    * Add functionality to the minus button
//    */
//   const [count, setCount] = React.useState(0)
  
//   function add() {
//       setCount(count + 1)
//       }
  
//   function minus() {
//     setCount(count - 1)
//   }

//   return (
//       <div className="counter">
//           <button className="counter--minus" onClick={minus}>–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus" onClick={add}>+</button>
//       </div>
//   )
// }

/*==============================================================
          EXERCISE PART 4 - Chaing State with Callback Function
================================================================*/
// export default function App() {
//   const [count, setCount] = React.useState(0)
//   /**
//    * Note: if you ever need the old value of state
//    * to help you determine the new value of state,
//    * you should pass a callback function to your
//    * state setter function instead of using
//    * state directly. This callback function will
//    * receive the old value of state as its parameter,
//    * which you can then use to determine your new
//    * value of state.
//    */
//   function add() {
//       setCount(prevCount => prevCount + 1)
//   }
//   // Challenge: update `substract` to use a callback function
  
//   function subtract() {
//       setCount(count - 1)
//   }
  
//   return (
//       <div className="counter">
//           <button className="counter--minus" onClick={subtract}>–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus" onClick={add}>+</button>
//       </div>
//   )
// }


/*==============================================================
          ANSWER PART 4 - Chaing State with Callback Function
================================================================*/

// export default function App() {
//   const [count, setCount] = React.useState(0)
//   /**
//    * Note: if you ever need the old value of state
//    * to help you determine the new value of state,
//    * you should pass a callback function to your
//    * state setter function instead of using
//    * state directly. This callback function will
//    * receive the old value of state as its parameter,
//    * which you can then use to determine your new
//    * value of state.
//    */
//   function add() {
//       setCount(prevCount => prevCount + 1)
//   }
//   // Challenge: update `substract` to use a callback function
  
//   function subtract() {
//       setCount(prevCount => prevCount - 1)
//   }
  
//   return (
//       <div className="counter">
//           <button className="counter--minus" onClick={subtract}>–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus" onClick={add}>+</button>
//       </div>
//   )
// }


/*==============================================================
          EXERCISE PART 5 - Chaing State with Callback Function
================================================================*/
// export default function App() {
//   /**
//   Create everything from Scratch
// */
//   return (
//       <div className="counter">
//           <button className="counter--minus">–</button>
//           <div className="counter--count">
//               <h1>0</h1>
//           </div>
//           <button className="counter--plus">+</button>
//       </div>
//   )
// }

/*==============================================================
          ANSWER PART 5 - Chaing State with Callback Function
================================================================*/
// export default function App() {
//   /**
//   Create everything from Scratch
// */
// const [count, setCount] = React.useState(0)

// function add() {
//   setCount(prevCount => prevCount + 1)
// }

// function subtract() {
//   setCount(prevCount => prevCount - 1)
// }


//   return (
//       <div className="counter">
//           <button className="counter--minus"onClick={subtract}>–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus"onClick={add}>+</button>
//       </div>
//   )
// }

