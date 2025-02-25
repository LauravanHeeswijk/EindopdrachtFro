import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            console.log("API Key:", import.meta.env.VITE_API_KEY);
            console.log("API URL:", import.meta.env.VITE_API_URL);
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/authenticate`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Api-Key": "dadjokes:aBLlxn4edeE0muKsp9fj"
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error("Login mislukt");
            }

            const data = await response.json();
            console.log("JWT-token:", data.token);

            localStorage.setItem("token", data.token);
            navigate("/homepage");
        } catch (error) {
            console.error("Fout bij inloggen:", error.message);
            setError("Inloggen mislukt, probeer opnieuw.");
        }
    };

    return (
        <div>
            <h1>Login Page 🚀</h1>
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
