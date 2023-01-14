import React from 'react'
import './App.css'


/*============================================
          EXERCISE PART 1 - useState 
==============================================*/

// function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]
  
//   /**
//    * Challenge: Map over the thingsArray to generate
//    * a <p> element for each item and render them on the page
//    * below the button
//    */
    
//   return (
//       <div>
//           <button>Add Item</button>
//           {/* Insert the things here*/}
//       </div>
//   )
// }

/*============================================
          ANSWER PART 1 - useState 
==============================================*/

// export default function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]

//   const thingsElements = thingsArray.map(thing => {
//     return <p>{thing}</p>
//   })
//     /**
//      * Challenge: Map over the thingsArray to generate
//      * a <p> element for each item and render them on the page
//      * below the button
//      */
//   return (
//       <div>
//           <button>Add Item</button>
//           {thingsElements}
          
//       </div>
//   )
// }


/*============================================
          EXERCISE PART 2 - useState 
==============================================*/

/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

// export default function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]

//   const thingsElements = thingsArray.map(thing => {
//     return <p>{thing}</p>
//   })

//   return (
//       <div>
//           <button>Add Item</button>
//           {thingsElements}
          
//       </div>
//   )
// }

/*============================================
          ANSWER PART 2 - useState 
==============================================*/

// /**
//  * Challenge: Add an event listener to the button so when
//  * it is clicked, it adds another thing to our array
//  * 
//  * Hint: use the array length + 1 to determine the number
//  * of the "Thing" being added. Also, have you event listener
//  * console.log(thingsArray) after adding the new item to the
//  * array
//  * 
//  * Spoiler: the page won't update when new things get added
//  * to the array!
//  */

// export default function App() {
//   const thingsArray = ["Thing 1", "Thing 2"]

  
//   function addElement() {
//     const newText = `Things ${thingsArray.length + 1}`
//     thingsArray.push(newText)
//     console.log(thingsArray);
//   }
  
//   const thingsElements = thingsArray.map(thing => {
//     return <p>{thing}</p>
//   })
//   return (
//       <div>
//           <button onClick={addElement}>Add Item</button>
//           {thingsElements}
          
//       </div>
//   )
// }


/*===============================================
          QUESTIOM PART 3 - COMPLEX STATE - ARRAYS
==================================================*/
// export default function App() {
//     /**
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array with the same 2 items below
//      * 
//      * Don't worry about fixing `addItem` quite yet.
//      */
//     const thingsArray = ["Thing 1", "Thing 2"]
    
//     function addItem() {
//         // We'll work on this next
//         // const newThingText = `Thing ${thingsArray.length + 1}`
//         // thingsArray.push(newThingText)
//         // document.getElementById()
//         // console.log(thingsArray)
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }


/*===============================================
          ANSWER PART 3 - COMPLEX STATE - ARRAYS
==================================================*/

// export default function App() {
//     /**PART 1
//      * Challenge: Convert the code below to use an array
//      * held in state instead of a local variable. Initialize 
//      * the state array with the same 2 items below
//      * 
//      * Don't worry about fixing `addItem` quite yet.
//      */
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         const newThingText = `Thing ${thingsArray.length + 1}`
//         setThingsArray(prevState => [...prevState, newThingText])
//         // We'll work on this next
//         // thingsArray.push(newThingText)
//         // document.getElementById()
//         // console.log(thingsArray)
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }
/*===============================================
          EXERCISE PART 4 - COMPLEX STATE - ARRAYS
==================================================*/
// export default function App() {
//     /**
//      * Challenge: See if you can do it all again by yourself :)
//      */
    
//     function addItem() {
//         // Build from scratch :)
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

/*===============================================
          ANSWER PART 3 - COMPLEX STATE - ARRAYS
==================================================*/

export default function App() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])
    
    function addItem() {
        // Build from scratch :)
        setThingsArray(prevState => {
            return ([...prevState,`Thing ${prevState.length + 1}`])
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
