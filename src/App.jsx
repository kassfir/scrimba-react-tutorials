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
  const [ diceValues, setDiceValues ] = React.useState(() => {
    const tempDice = [];

    for (let i = 0; i < 10; i++){
      tempDice.push(Math.floor((Math.random()*6) + 1));
    }

    return tempDice;
  }); 


  const dice = () => {
    const newDice = [] 
    
    diceValues.forEach(
      (dieValue, index) => {
        console.log(dieValue, index);
        newDice.push(<Die number={dieValue} key={index} />);
      }
    )
    console.log(newDice);
    return newDice;
  }

  function rollDice (event) {
    event.preventDefault();
    console.log('rolled');
    const tempDice = [];

    for (let i = 0; i < 10; i++){
      tempDice.push(Math.floor((Math.random()*6) + 1));
    }
    console.log(tempDice);
    setDiceValues(tempDice);
  }

  return (
    <main>
      <div className='dice-container'>
        {dice ()}
      </div>
      <button className="reroll-button" onClick={rollDice}>Roll dice</button>
    </main>
  )
}

export default App 