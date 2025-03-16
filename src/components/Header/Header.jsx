import { Link, useNavigate } from "react-router-dom"
import React from "react";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");

    };
        return (
        <header className="Header">
            <nav className= "nav">
                <ul className="nav-links">
                    <li><Link to="/homepage">HOME</Link></li>
                    <li><Link to="/new-dadjoke">NEW DAD JOKE</Link></li>
                    <li><Link to="/my-dadjokes">MY DAD JOKES</Link></li>
                    <li><Link to="/my-profile">MY PROFILE</Link></li>
                    <li><button onClick={handleLogout}>SIGN OUT</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
