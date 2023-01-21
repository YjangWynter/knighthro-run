import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import MusicSelection from './components/MusicSelection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div>
        <MusicSelection />
      </div>
      <h2>Choose your music genre</h2>
      <div className="card">
        <button >
          Start game 
        </button>
      </div>
    </div>
  )
}

export default App
