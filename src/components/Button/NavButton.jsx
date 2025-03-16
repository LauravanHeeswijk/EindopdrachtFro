import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavButton.jsx";

    const NavButton = ({ text, path, className }) => {
        const navigate = useNavigate();

        return (
            <button className={className} onClick={() => navigate(path)}>
                {text}
            </button>
        );
    };

export default NavButton;