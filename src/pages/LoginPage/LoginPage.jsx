import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const [username, setUsername] = useState(""); // Username, want API verwacht geen email
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            console.log("API URL:", apiUrl);

            const response = await axios.post(
                `${apiUrl}/users/authenticate`,
                { username, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                }
            );

            console.log("API-response ontvangen:", response.data);

            const token = response.data?.jwt;
            if (!token) {
                throw new Error("Geen token ontvangen van de server.");
            }

            console.log("JWT-token ontvangen:", token);

            localStorage.setItem("token", token);

            navigate("/homepage");
        } catch (error) {
            console.error("Fout bij inloggen:", error.response ? error.response.data : error.message);
            setError("Inloggen mislukt, controleer je gegevens en probeer opnieuw.");
        }
    };

    return (
        <div>
            <h1>Login Page 🚀</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Gebruikersnaam"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
