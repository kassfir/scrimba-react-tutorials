import React from "react"
import { Die } from "./components/Die";
import { nanoid } from "nanoid";

/**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

function App() {

  const [dice, setDice] = React.useState(() => allNewDice())

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

    if(areDiceEqual()){
      window.alert('winrar is you!');
    }
    
  }

  function areDiceEqual () {
    let checkedValue = dice[0].value;

    for (let i = 0; i < dice.length; i++) {

      if (dice[i].value !== checkedValue) {
        return false;
      }
    }

    return true;
  }

  function hold (id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return {...die, isHeld: die.id === id ? !die.isHeld : die.isHeld}
      })
    })
    console.log(id);
  }


  const diceElements = dice.map((die) => <Die clickHandler={() => hold(die.id)} isHeld={die.isHeld} number={die.value} key={die.id}/>)

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