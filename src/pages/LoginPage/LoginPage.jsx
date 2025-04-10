import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";
import Gradientbar from "../../components/Gradientbar/Gradientbar.jsx";

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
            console.error("Fout bij inloggen:", error);

            if (!error.response) {
                setError("Oeps, geen verbinding! Controleer je verbinding of probeer het later opnieuw.");
            } else if (error.response.status === 401) {
                setError("Wachtwoord onjuist.");
            } else {
                setError("Inloggen mislukt. Controleer je gegevens en probeer opnieuw.");
            }
        }
    };

    return (
        <div className="login-page-container">
            <Gradientbar/>

            <div className="login-page">
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
