import { Link } from "react-router-dom";

function Navbar() {
    const pages = ['Movies','Trending'];
    return(
        <div className="flex justify-between items-center p-4 bg-gray-400 text-white shadow-lg">
            <div className="text-2xl font-bold">
                <h1>LOGO</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                <li><Link to='/' >Home</Link></li>
                {pages.map((page,index)=>(
                    <li key={index}>
                        <Link
                        to={`/${page.toLocaleLowerCase()}`}
                        >
                        {page}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;