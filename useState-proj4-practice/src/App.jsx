import React from 'react'
import './App.css'


// =============================||
//         Exercise 1           ||
//==============================||
// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
//     })
//     /**PART 1
//      * Challenge: Fill in the values in the markup
//      * using the properties of our state object above
//      * (Ignore `isFavorite` for now)
//      */
        /**PART 2
         * Challenge: Use a ternary to determine which star image filename
         * should be used based on the `contact.isFavorite` property
         * 
         * `true` => "star-filled.png"
         * `false` => "star-empty.png"
         *  *  * Then use the starIcon value to display the correct image
     */
        
        // const starIcon = 

//     function toggleFavorite() {
//         console.log("Toggle Favorite")
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                         src={`../images/star-empty.png`} 
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         John Doe
//                     </h2>
//                     <p className="card--contact">+1 (719) 555-1212</p>
//                     <p className="card--contact">itsmyrealname@example.com</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }

// =============================||
//         ANSWER 1           ||
//==============================||
export default function App() {
  const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (719) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: true
  })
  /**PART 1
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  /** PART 2
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     *  * Then use the starIcon value to display the correct image
     */
     
    

  const starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
  
  function toggleFavorite() {
      setContact(prevState => {
        return{...prevState, isFavorite: !prevState.isFavorite}
      })
  }
  
  return (
      <main>
          <article className="card">
              <img src="./images/user.png" className="card--image" />
              <div className="card--info">
                  <img 
                      src={`../images/${starIcon}`} 
                      className="card--favorite"
                      onClick={toggleFavorite}
                  />
                  <h2 className="card--name">
                      {contact.firstName} {contact.lastName}
                  </h2>
                  <p className="card--contact">{contact.phone}</p>
                  <p className="card--contact">{contact.email}</p>
              </div>
              
          </article>
      </main>
  )
}
