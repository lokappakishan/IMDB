import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul className="flex">
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/movies' >Movies</Link></li>
            </ul>
      </nav>
    )
}

export default Navbar;