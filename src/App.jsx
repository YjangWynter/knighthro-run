import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
<<<<<<< HEAD
import Game from './components/game'
import Navbar from './components/Navbar'
import MusicSelection from './components/MusicSelection'

<<<<<<< HEAD
=======
import MusicSelection from './components/MusicSelection'
>>>>>>> cc72757 (added components)
=======
>>>>>>> 6bb11d8 (updated button color)

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Game></Game>
      <Navbar/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <MusicSelection />
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
