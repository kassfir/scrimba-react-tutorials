/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card () {
    return (
        <div className="card">
            <div className="card--image-container">
                <img src="./profile.png" className="card--profile-pic"></img>
                <div className="card--status">
                    <p>SOLD OUT</p>
                </div>
            </div>

            <div className="card--rating-container">
                <img src="./star.png"></img>
                <p className="card--rating-score">5.0</p>
                <p className="card--rating-extra">(6) - USA</p>
            </div>

            <p>Life Lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}