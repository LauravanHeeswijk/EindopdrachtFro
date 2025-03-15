import React from "react";
import NavButton from "../../components/Button/NavButton.jsx";
import "./LoginRegistrationPage.css";

const LoginRegistrationPage = () => {
    return (
        <div className="login-registration-container">
            <h1>Dad Jokes</h1>
            <p className="subtitle">“Zo goed dat ze slecht zijn”</p>

            <div className="registration-page">
                <NavButton text="SIGN-UP" path="/registration" className="nav-button" />
            </div>

            <div className="login-page">
                <NavButton text="LOG-IN" path="/login" className="nav-button" />
            </div>
        </div>
    );
};

export default LoginRegistrationPage;
