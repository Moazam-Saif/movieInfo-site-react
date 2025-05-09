import { NavLink } from "react-router"
import "./Header.css"

export const Header = () => {
    return (
        <>
        <div className="top-bar">
        <p>Hello jee</p>
        <div className="auth-links">
            <NavLink to="#">SIGN IN</NavLink>
            <NavLink to="#">SIGN UP</NavLink>
        </div>
    </div>
    <nav className="navbar">
        <div className="logo">FlaxFlux</div>
        <ul className="nav-links">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/movies">MOVIES</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
        </ul>
    </nav>
        </>
    )
}