import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MusicSelection from './components/MusicSelection'
import ChromeDinoGame from 'react-chrome-dino';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <MusicSelection />
        <ChromeDinoGame />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
