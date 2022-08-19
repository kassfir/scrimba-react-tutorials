import data from '../data';
import React from 'react';

export default function Meme() {
 /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    const [memeImageUrl, setMemeImageUrl] = React.useState('https://i.imgflip.com/30b1gx.jpg');

    function generateNewMeme () {
        let allMemes = data.data.memes;
        let randomInt = Math.floor(Math.random() * allMemes.length);
        let memeUrl = allMemes[randomInt].url;
        
        setMemeImageUrl(memeUrl);
    }


    

    

    return (
    <main>
        <div className="form">
            <input 
                type="text" 
                className="form--input" 
                placeholder="top text"
            />

            <input 
                type="text" 
                className="form--input" 
                placeholder="bottom text"
            />

            <button onClick={generateNewMeme} className="form--button">
                    Get a new meme image 🖼
            </button>

            <img src={memeImageUrl} className='meme--image' />
        </div>
    </main>
    )
}