//Css
import './App.css'
//React
import { useCallback, useEffect, useState } from 'react'
//Data
import { wordsPt } from "./data/words.js"
//Components
import StartScreen from "./components/StartScreen/StartScreen.jsx"
import Game from "./components/Game/Game.jsx"
import GameOver from "./components/GameOver/GameOver.jsx"

const stages = [
  { id: 1, name: "start"},
  { id: 2, name: "game"},
  { id: 3, name: "end"},
]

function App() {
 const [gameStage, setGameStage] = useState(stages[0].name);
 const [words] = useState(wordsPt);
 console.log(words);

  return (
    <>
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </div>
    </>
  )
}

export default App
