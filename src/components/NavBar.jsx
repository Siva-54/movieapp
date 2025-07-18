import { Link } from "react-router-dom"
import '../css/NavBar.css'

function NavBar(){
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to='/'>MovieApp</Link>
            </div>
            <div className="navbar-links">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/favourites' className="nav-link">Favourites</Link>
            </div>
        </div>
    )
}

export default NavBar