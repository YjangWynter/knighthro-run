import parse from 'html-react-parser'
import DinoGame from '../assets/game.html'
import '../components/game.css'

function Game() {
    return (
        <div>
            <iframe id="DinoGame" src={DinoGame}></iframe>
        </div>
    )
}

export default Game