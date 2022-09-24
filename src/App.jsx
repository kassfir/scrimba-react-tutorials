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

  const [startTime, setStartTime] = React.useState(() => Date.now());
  const [elapsedTime, setElapsedTime] = React.useState(() => Date.now());
  const [rollCount, setRollCount] = React.useState(() => 0);
  const [dice, setDice] = React.useState(() => allNewDice());
  const [tenzies, setTenzies ] = React.useState(false);
  const [isTimeHighScore, setIsTimeHighScore ] = React.useState(false);
  const [isRollHighScore, setIsRollHighScore ] = React.useState(false);

  React.useEffect(() => {
    const checkedValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === checkedValue && die.isHeld);

    if (allSameValue) {
      setElapsedTime(Date.now() - startTime);
      setTenzies(true);
      checkRollCountHighScore();
      checkElapsedTimeHighScore();
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
    setRollCount(prevCount => prevCount + 1)
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
    setStartTime(Date.now());
    setRollCount(0);
  }

  function clearScore (event) {
    event.preventDefault(); 
    localStorage.clear()
  }

  function checkRollCountHighScore () {

    const highScoreString = localStorage.getItem('rollCount');

    if (!highScoreString) {
      localStorage.setItem('rollCount', rollCount.toString());
      setIsRollHighScore(true);
      return true;
    }

    const highScore = parseInt(highScoreString);

    if (highScore > rollCount) { 
      localStorage.setItem('rollCount', rollCount.toString());
      setIsRollHighScore(true);
      return true;
    }

    setIsRollHighScore(false);
    return false;
  }
  
  function checkElapsedTimeHighScore () {

    const highScoreString = localStorage.getItem('elapsedTime');

    if (!highScoreString) {
      localStorage.setItem('elapsedTime', elapsedTime.toString());
      setIsTimeHighScore(true);
      return true;
    }

    const highScore = parseInt(highScoreString);

    if (highScore > elapsedTime) { 
      localStorage.setItem('elapsedTime', elapsedTime.toString());
      setIsTimeHighScore(true);
      return true;
    }

    setIsTimeHighScore(false);
    return false;
  }


  const mainButton = tenzies ? 
    <button className="button reroll-button" onClick={restartGame}>New game</button>:
    <button className="button reroll-button" onClick={rollDice}>Roll</button>;

  const clearScoreButton = <button className="button clear-score-button" onClick={clearScore}>Clear high score</button>


  const diceElements = dice.map((die) => 
    <Die clickHandler={() => { 
        if (!tenzies) {
          hold(die.id)
        }
      }
    } 
    isHeld={die.isHeld} 
    number={die.value} 
    key={die.id}
  />)

  
  function newTimeRecord () {
    return (tenzies && isTimeHighScore && <span className="record-announcement">Best time!</span> )
  } 
  
  function newRollRecord () {
    return (tenzies && isRollHighScore && <span className="record-announcement">Least rolls!</span> )
  } 
  
  const score = <p className="instructions">It took you {rollCount} rolls {newRollRecord()}<br/>and {elapsedTime/1000} seconds {newTimeRecord()}<br/>to win!</p>

  

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
 
      <div className='dice-container'>
        {diceElements}
      </div>
      { mainButton }
      {tenzies && score}
      { tenzies && isTimeHighScore && newTimeRecord}
      { tenzies && isRollHighScore && newRollRecord}
      { tenzies && clearScoreButton}
      {tenzies && <Confetti />}

    </main>
  )
}

export default App 