import React, {useState} from 'react';

import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";


function App() {

  const [isQuizStarted, setIsQuizStarted] = React.useState(true);

  function startQuiz (event) {
    event.preventDefault();
    console.log('fgsfds');  
    setIsQuizStarted(true);
  }


  return (
    <main>
      {isQuizStarted ? <QuizScreen/> : <StartScreen onClick={(event) => startQuiz(event)}/>}
    </main>

  )
}

export default App 