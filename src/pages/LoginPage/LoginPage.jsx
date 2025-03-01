import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

            console.log("API Response:", response.data);

            const token = response.data.jwt;
            const username = email;

            if (!token || !username) {
                throw new Error("Geen token of username ontvangen van de server.");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);

            console.log("Ingelogd als:", username);
            navigate("/homepage");
        } catch (error) {
            console.error("Fout bij inloggen:", error.response?.data || error.message);
            setError("Inloggen mislukt, controleer je gegevens en probeer opnieuw.");
        }
    };


    return (
        <div>
            <h1>Login 🚀</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>

            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default LoginPage;
