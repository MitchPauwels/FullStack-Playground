import React from 'react'
import './App.css'


/*============================================
          EXERCISE PART 1 - useState 
==============================================*/

// export default function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]

//   const things = thingsArray.map(things => {
//     return <p>{things}</p>
//   })
//     /**
//      * Challenge: Map over the thingsArray to generate
//      * a <p> element for each item and render them on the page
//      * below the button
//      */
//   return (
//       <div>
//           <button>Add Item</button>
//           {things}
          
//       </div>
//   )
// }

/*============================================
          ANSWER PART 1 - useState 
==============================================*/

export default function App() {
  const thingsArray = ["Thing 1", "Thing 2"]

  const thingsElements = thingsArray.map(thing => {
    return <p>{thing}</p>
  })
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
  return (
      <div>
          <button>Add Item</button>
          {thingsElements}
          
      </div>
  )
}

