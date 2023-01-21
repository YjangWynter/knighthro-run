import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Game from './components/game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Game></Game>
    </div>
  )
}

export default App
