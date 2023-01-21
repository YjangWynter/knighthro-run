import "./Navbar.css";
import Signin from './signIn/signIn';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">Knightro Run</h1>
      <ul>
        <li>
          <a><Signin /></a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
