import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MusicSelection from './components/MusicSelection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div>
        <MusicSelection />
      </div>
    </div>
  )
}

export default App
