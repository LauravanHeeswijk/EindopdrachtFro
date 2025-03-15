import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_NOVI_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email.includes("@") || !email.includes(".")) {
            setError("Voer een geldig e-mailadres in.");
            return;
        }
        if (password.length < 8) {
            setError("Wachtwoord moet minimaal 8 tekens hebben.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Wachtwoorden komen niet overeen.");
            return;
        }

        try {
            const response = await axios.post(
                `${apiUrl}/users`,
                {
                    username: email,
                    email: email,
                    password: password,
                    info: "default info",
                    authorities: [{ authority: "USER" }],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": apiKey,
                    },
                }
            );

            console.log("Registratie succesvol!", response.data);
            navigate("/login");
        } catch (error) {
            console.error("Fout bij registreren:", error.response?.data || error.message);
            setError("Registratie mislukt. Probeer opnieuw.");
        }
    };

    return (
        <div>
            <h1>Registreer 🚀</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Wachtwoord (min. 8 tekens)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Bevestig wachtwoord"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Registreren</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default RegistrationPage;
