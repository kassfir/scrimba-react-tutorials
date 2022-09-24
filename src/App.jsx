import React from "react"
import { Die } from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';

/**
 * Challenge:
 * CSS - put real dots on the die
 * Track the number of rolls
 * Track the time it took to win
 * Save best time to localStorage
 */

function App() {

  const [dice, setDice] = React.useState(() => allNewDice());
  const [ tenzies, setTenzies ] = React.useState(false);

  React.useEffect(() => {
    const checkedValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === checkedValue);

    if (allSameValue) {
      setTenzies(true);
      console.log('all are equal');
    }

  }, [dice])

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
        newDice.push({
          value: (Math.floor(Math.random() * 6) + 1), 
          isHeld: false,
          id: nanoid(),
        })
    }

    return newDice
  }

  function rollDice() {
    setDice(prevDice => {
      const newDice = [];

      prevDice.forEach(die => {
        newDice.push({
          ...die,
          value: die.isHeld ?  die.value : Math.floor(Math.random() * 6) + 1
        });
      })
      return newDice;
    })  
  }

  function hold (id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return {...die, isHeld: die.id === id ? !die.isHeld : die.isHeld}
      })
    })
  }

  function restartGame () {
    setDice(allNewDice());
    setTenzies(false);
  }

  const mainButton = tenzies ? 
    <button className="reroll-button" onClick={restartGame}>New game</button>:
    <button className="reroll-button" onClick={rollDice}>Roll</button>;


  const diceElements = dice.map((die) => <Die clickHandler={() => hold(die.id)} isHeld={die.isHeld} number={die.value} key={die.id}/>)

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      { mainButton }
      {tenzies && <Confetti />}
    </main>
  )
}

export default App 