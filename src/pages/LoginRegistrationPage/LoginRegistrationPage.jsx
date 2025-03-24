import React from "react";
import NavButton from "../../components/Button/NavButton.jsx";
import "./LoginRegistrationPage.css";
import Dadjoke from "../../assets/Dadjoke.png";
import Gradientbar from "../../components/Gradientbar/Gradientbar.jsx";


const LoginRegistrationPage = () => {
    return (

        <div className="login-registration-container">
            <Gradientbar />
            <div className="button-group">
                <NavButton text="SIGN-UP" path="/registration" className="nav-button black-button"/>
                <NavButton text="LOG-IN" path="/login" className="nav-button light-button"/>
            </div>
        </div>
    );
};

export default LoginRegistrationPage;
