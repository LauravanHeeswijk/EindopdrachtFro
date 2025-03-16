import React from "react";
import NavButton from "../../components/Button/NavButton.jsx";
import "./LoginRegistrationPage.css";
import Dadjoke from "../../assets/Dadjoke.png";


const LoginRegistrationPage = () => {
    return (

        <div className="login-registration-container">
            <img src={Dadjoke} alt="Dad joke" className="dadjoke-image"/>
            <h1>Dad Jokes</h1>
            <p className="subtitle">“Zo goed dat ze slecht zijn”</p>

            <div className="button-group">
                <NavButton text="SIGN-UP" path="/registration" className="nav-button black-button"/>
                <NavButton text="LOG-IN" path="/login" className="nav-button light-button"/>
            </div>
        </div>
    );
};

export default LoginRegistrationPage;
