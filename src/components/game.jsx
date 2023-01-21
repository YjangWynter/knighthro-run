import DinoGame from '../assets/game.html'
import '../components/game.css'

import State from '../components/state'
import '../components/state.css'

function Game() {
    return (
        <div>
            <iframe id="DinoGame" src={DinoGame}></iframe>
            <State></State>
        </div>
    )
}

export default Game