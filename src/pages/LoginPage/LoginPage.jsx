import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import Dadjoke from "../../assets/Dadjoke.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(`${apiUrl}/users/authenticate`, {
                username: email,
                password: password,
            });

            const token = response.data.jwt;
            const username = email;

            if (!token || !username) {
                throw new Error("Geen token of username ontvangen van de server.");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            console.log("Ingelogd als:", username);

            navigate("/homepage");
        } catch (error) {
            console.error("Fout bij inloggen:", error.response?.data || error.message);
            setError("Inloggen mislukt, controleer je gegevens en probeer opnieuw.");
        }
    };

    return (
        <div className="login-page-container">
            <div className="gradient-background"></div>
            <div className="login-page">
                <img src={Dadjoke} alt="Dad joke" className="dadjoke-image"/>
                <p className="subtitle">“Zo goed dat ze slecht zijn”</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                    <input
                        type="password"
                        placeholder="Wachtwoord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <button type="submit" className="nav-button">Login</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
