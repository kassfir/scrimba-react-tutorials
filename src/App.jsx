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
      <div className="blob-area">
        <img src = "assets/blobs/yellow-blob.svg" className="yellow-blob" alt="yellow-blob"/>
        <img src = "assets/blobs/blue-blob.svg" className="blue-blob" alt="blue-blob"/>
      </div>

    </main>

  )
}

export default App 