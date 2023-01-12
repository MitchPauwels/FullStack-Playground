import React from 'react'
import memesData from '../meme-data.js'

/*============================================
          EXERCISE PART 1 - Get Random Meme 
==============================================*/

// export default function Meme() {
//     /**
//      * Challenge: Get a random image from the `memesData` array
//      * when the "new meme image" button is clicked.
//      * 
//      * Log the URL of the image to the console. (Don't worry
//      * about displaying the image yet)
//      */
//     return (
//         <main>
//             <div className="form">
//                 <input 
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button 
//                     className="form--button"
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//         </main>
//     )
// }

/*============================================
          ANSWER PART 1 - Get Random Meme 
==============================================*/

// export default function Meme() {
//     /**
//      * Challenge: Get a random image from the `memesData` array
//      * when the "new meme image" button is clicked.
//      * 
//      * Log the URL of the image to the console. (Don't worry
//      * about displaying the image yet)
//      */
// // console.log(meme);

// const [allMemesImages, setAllMemesImages] = React.useState(memesData)

// function getMemeImage() {
//     const memes = memesData.data.memes
//     const random = Math.floor(Math.random() * memes.length)
//     const url = memes[random].url
// }



//     return (
//         <main>
//             <div className="form">
//                 <input 
//                     type="text"
//                     placeholder="Top text"
//                     className="form--input"
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Bottom text"
//                     className="form--input"
//                 />
//                 <button onClick={getMemeImage}
//                     className="form--button"
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//         </main>
//     )
// }