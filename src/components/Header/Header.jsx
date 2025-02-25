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
                    <li><Link to="/homepage">Home</Link></li>
                    <li><Link to="/new-dadjoke">New Dad Joke</Link></li>
                    <li><Link to="/my-dadjokes">My Dad Jokes</Link></li>
                    <li><Link to="/my-profile">My Profile</Link></li>
                    <li><button onClick={handleLogout}>Sign out</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
