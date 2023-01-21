import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MusicSelection from './components/MusicSelection'


function App() {
  const [playGame, setPlayGame] = useState(false)
  const toggleGame = () => {
    setPlayGame(!playGame);
  }

  return (
    <div className="App">    
     <Navbar/>
      <div>
        <MusicSelection />
      </div>
      <h2>Choose your music genre</h2>
      <div className="card">
        <button onClick={playGame}>
          Start game 
        </button>
        {playGame && (
          //Game code <Game/>
          <p>Game</p>
        )}
      </div>
    </div>
  )
}

export default App
