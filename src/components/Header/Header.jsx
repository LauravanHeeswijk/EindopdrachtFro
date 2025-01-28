import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <header className="Header">
            <nav className= "nav">
                <ul className= "nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/my-tasks">My Tasks</Link></li>
                    <li><Link to="/new-task">New Task</Link></li>
                    <li><Link to="/my-profile">My Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;