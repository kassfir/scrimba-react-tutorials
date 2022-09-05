// import memesData from '../memesData';
import React from 'react';


export default function Meme() {
       /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */


    const [formData, setFormData] = React.useState({
        topText: '',
        bottomText: '',
    });
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        console.log('HTTP REQUEST MADE');
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemeImages(data));
    }, [])
    
    
    function getMemeImage(event) {
        event.preventDefault();

        if (formData.bottomText === '' || formData.topText === '') {
            setMeme(prevMeme => ({
                topText: 'One does not simply',
                bottomText: 'Leave the form unfilled',
                randomImage: 'http://i.imgflip.com/1bij.jpg'
            }))
            return;
        }

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            topText: formData.topText,
            bottomText: formData.bottomText,
            randomImage: url
        }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData (prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            } 
        })
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name='topText'
                    value={formData.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name='bottomText'
                    value={formData.bottomText}
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