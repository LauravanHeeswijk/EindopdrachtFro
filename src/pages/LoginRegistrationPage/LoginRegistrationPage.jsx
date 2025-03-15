import React from "react";
import NavButton from "../../components/Button/NavButton.jsx";
import "./LoginRegistrationPage.css";

const LoginRegistrationPage = () => {
    return (
        <div className="login-registration-container">
            <h1>Dad Jokes</h1>
            <p className="subtitle">“Zo goed dat ze slecht zijn”</p>

            <NavButton text="SIGN-UP" path="/registration" isPrimary={true} />
            <NavButton text="LOG-IN" path="/login" isPrimary={false} />
        </div>
    );
};
export default LoginRegistrationPage;
