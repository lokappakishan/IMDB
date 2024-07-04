import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="flex justify-between items-center p-4 bg-gray-400 text-white shadow-lg">
            <div className="text-2xl font-bold">
                <h1>LOGO</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/movies' >Movies</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;