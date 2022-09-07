import React from "react"

/**
 * Challenge:
 * 
 * - Create a Die component that takes a `value` prop
 * - Render 10 instances of the Die component (manually)
 *      - Provide a number between 1-6 for the value on each
 *        for now
 * - Style the <main> and <Die> components 
 *   to look like they do in the slide
 *      - Hints: Create a container to hold the 10 instances
 *        of the Die component, and use CSS Grid to lay them
 *        out evenly in 2 rows of 5 columns
 *      - Use flexbox on main to center the dice container
 *        in the center of the page
 */

function Die(props){
  return (<div className="die-face">
    <h2 className="die-num">
      {props.number}
    </h2>
  </div>)
}


function App() {
  const dice = () => {
    const dice = [];
    for (let i = 0; i < 10; i++){
      dice.push(<Die number={Math.floor((Math.random()*6) + 1)}></Die>)
    }

    return dice;
  }

  return (
    <main>
      <div className='dice-container'>
        {dice ()}
      </div>
    </main>
  )
}

export default App 