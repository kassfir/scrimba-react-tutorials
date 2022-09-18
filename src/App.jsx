import React from "react"
import { Die } from "./components/Die";

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */



function App() {

  const [dice, setDice] = React.useState(() => allNewDice())

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.floor(Math.random() * 6) + 1)
    }

    return newDice
  }

  function rollDice() {
      setDice(allNewDice())
  }


  const diceElements = dice.map((die, index) => <Die number={die} key={index}/>)

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className="reroll-button" onClick={rollDice}>Roll dice</button>
    </main>
  )
}

export default App 