import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // ✅ Correct gebruik van useNavigate

    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Wachtwoorden komen niet overeen.");
            return;
        }
        if (password .length < 6) {
            setError("Wachtwoord moet minimaal 6 tekens zijn!");
            return;
        }
        if (password !== confirmPassword) {
            setError("wachtwoord komt niet overeen.");
            return;
        }
        try {
            const response = await fetch(`${apiUrl}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Api-Key": apiKey,
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error("Registratie mislukt");
            }

            navigate("/login");
        } catch (error) {
            console.error("Fout bij registreren:", error.message);
            setError("Registratie mislukt, probeer opnieuw.");
        }
    };

    return (
        <div>
            <h1>Register Page 🚀</h1>
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