import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavButton.css";

const NavButton = ({ text, path, isPrimary }) => {
    const navigate = useNavigate();

    return (
        <button className={isPrimary ? "primary-button" : "secondary-button"} onClick={() => navigate(path)}>
            {text}
        </button>
    );
};

export default NavButton;