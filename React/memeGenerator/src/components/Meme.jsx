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
//                 <button onClick={handleClick}
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

// function getMemeImage() {
//     const memes = memesData.data.memes
//     const random = Math.floor(Math.random() * memes.length)
//     const url = memes[random].url
//     console.log(url);
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

/*============================================
          Exercise PART 2 - Get Random Meme 
==============================================*/
// export default function Meme() {
//     /**
//      * Challenge: Save the random meme URL in state
//      * - Create new state called `memeImage` with an
//      *   empty string as default
//      * - When the getMemeImage function is called, update
//      *   the `memeImage` state to be the random chosen
//      *   image URL
//      * - Below the div.form, add an <img /> and set the
//      *   src to the new `memeImage` state you created
//      */
    
//     function getMemeImage() {
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         // memesArray[randomNumber].url  <-- this line is incomplete!
        
//     }
    
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
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
            
//         </main>
//     )
// }
/*============================================
          ANSWER PART 2 - Get Random Meme 
==============================================*/
// export default function Meme() {
//     /**
//      * Challenge: Save the random meme URL in state
//      * - Create new state called `memeImage` with an
//      *   empty string as default
//      * - When the getMemeImage function is called, update
//      *   the `memeImage` state to be the random chosen
//      *   image URL
//      * - Below the div.form, add an <img /> and set the
//      *   src to the new `memeImage` state you created
//      */

//     const [memeImage, setMemeImage] = React.useState('"http://i.imgflip.com/1bij.jpg"')
    
//     function getMemeImage() {
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         // memesArray[randomNumber].url  <-- this line is incomplete!
//         setMemeImage(memesArray[randomNumber].url)
//     }
    
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
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//                 <img src={memeImage} className='meme--image'/>
//             </div>
            
//         </main>
//     )
// }
/*============================================
          Exercise PART 3 - Get Random Meme 
==============================================*/
// export default function Meme() {
//     /**
//      * Challenge: Update our state to save the meme-related
//      * data as an object called `meme`. It should have the
//      * following 3 properties:
//      * topText, bottomText, randomImage.
//      * 
//      * The 2 text states can default to empty strings for now,
//      * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
//      * 
//      * Next, create a new state variable called `allMemeImages`
//      * which will default to `memesData`, which we imported above
//      * 
//      * Lastly, update the `getMemeImage` function and the markup 
//      * to reflect our newly reformed state object and array in the
//      * correct way.
//      */
    
//     const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    
    
//     function getMemeImage() {
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)
        
//     }
    
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
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <img src={memeImage} className="meme--image" />
//         </main>
//     )
// }
/*============================================
          ANSWER PART 3 - Get Random Meme 
==============================================*/

// export default function Meme() {
//     /**
//      * Challenge: Update our state to save the meme-related
//      * data as an object called `meme`. It should have the
//      * following 3 properties:
//      * topText, bottomText, randomImage.
//      * 
//      * The 2 text states can default to empty strings for now,
//      * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
//      * 
//      * Next, create a new state variable called `allMemeImages`
//      * which will default to `memesData`, which we imported above
//      * 
//      * Lastly, update the `getMemeImage` function and the markup 
//      * to reflect our newly reformed state object and array in the
//      * correct way.
//      */
    
//     // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
//     const [meme, setMeme] = React.useState({
//         topText: '',
//         bottomText: '',
//         randomImage: "http://i.imgflip.com/1bij.jpg"

//     })
//     const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
//     function getMemeImage() {
//         const memesArray = allMemeImages.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMeme(prevMeme => ({
//              ...prevMeme, randomImage:memesArray[randomNumber].url
//         }))
        
//     }
    
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
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <div className="meme">
//                 <img src={meme.randomImage} className="meme--image" />
//                 <h2 className="meme--text top">One does not simply</h2>
//                 <h2 className="meme--text bottom">Walk into Mordor</h2>
//             </div>
//         </main>
//     )
// }

/*============================================
          Question PART 3 - Add Text
==============================================*/
// export default function Meme() {
//     /**
//      * Challenge: 
//      * 1. Set up the text inputs to save to
//      *    the `topText` and `bottomText` state variables.
//      * 2. Replace the hard-coded text on the image with
//      *    the text being saved to state.
//      */
    
//     const [meme, setMeme] = React.useState({
//         topText: "",
//         bottomText: "",
//         randomImage: "http://i.imgflip.com/1bij.jpg" 
//     })
//     const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
//     function getMemeImage() {
//         const memesArray = allMemeImages.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         const url = memesArray[randomNumber].url
//         setMeme(prevMeme => ({
//             ...prevMeme,
//             randomImage: url
//         }))
        
//     }
    
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
//                     onClick={getMemeImage}
//                 >
//                     Get a new meme image 🖼
//                 </button>
//             </div>
//             <div className="meme">
//                 <img src={meme.randomImage} className="meme--image" />
//                 <h2 className="meme--text top">One does not simply</h2>
//                 <h2 className="meme--text bottom">Walk into Mordor</h2>
//             </div>
//         </main>
//     )
// }
/*============================================
          ANSWER PART 3 - Add Text
==============================================*/
export default function Meme() {
    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))        
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}