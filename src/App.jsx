import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Joke from "./components/Joke"

/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/

function App() {

  

  function provideNewJoke () {
    console.log('new joke');

    let currentJokeIndex = this.state.currentJokeIndex;
    let newJokeIndex = currentJokeIndex

    while (newJokeIndex === currentJokeIndex) {
      newJokeIndex = Math.floor(Math.random() * jokes.length);
    }

    

    this.setState({currentJokeIndex: newJokeIndex})
  }

  let jokes = [
    {
      "setup": "I got my daughter a fridge for her birthday.",
      "punchline": "I can't wait to see her face light up when she opens it.",
      "isPun": true,
    },
    {
      "setup": "How did the hacker escape the police?",
      "punchline": "He just ransomware!",
      "isPun": true,
    },
    {
      "setup": "Why don't pirates travel on mountain roads?",
      "punchline": "Scurvy.",
      "isPun": true,
    },
    {
      "setup": "Why do bees stay in the hive in the winter?",
      "punchline": "Swarm.",
      "isPun": true,
    },
    {
      "setup": "What's the best thing about Switzerland?",
      "punchline": "I don't know, but the flag is a big plus!",
      "isPun": true,
    },
    {
      "punchline": "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
      "isPun": false,
    }
  ]

  // console.log('got here');

  let jokeList = [
    <h1>Stuff</h1>,
    <h1>other stuff</h1>
  ]


  return (
      <main>
        <Joke 
          setup={jokes[0]['setup']} 
          punchline={jokes[0]['punchline']}
        />
        <Joke 
          setup={jokes[1]['setup']} 
          punchline={jokes[1]['punchline']}
        />
        <Joke 
          setup={jokes[2]['setup']} 
          punchline={jokes[2]['punchline']}
        />
        <Joke 
          setup={jokes[3]['setup']} 
          punchline={jokes[3]['punchline']}
        />
        <Joke 
          setup={jokes[4]['setup']} 
          punchline={jokes[4]['punchline']}
        />
        <Joke 
          punchline={jokes[5]['punchline']}
        />
      </main> 
  )
}

export default App

