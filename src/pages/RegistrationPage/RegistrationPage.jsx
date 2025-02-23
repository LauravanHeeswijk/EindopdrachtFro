import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_NOVI_API_KEY;


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        console.log("API wordt aangeroepen:", `${apiUrl}/users`);
        setError(null);


        if (password !== confirmPassword) {
            setError("Wachtwoorden komen niet overeen.");
            return;
        }
        if (password.length <8) {
            setError("Wachtwoord moet minimaal 8 tekens zijn!");
            return;
        }
        try {
            const response = await fetch("https://api.datavortex.nl/dadjokes/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-Api-Key": "dadjokes:aBLlxn4edeE0muKsp9fj",
                },
                body: JSON.stringify({
                    username: email,
                    email: email,
                    password: password,
                    authorities: [{ authority: "USER" }],
                }),
            });

            const text = await response.text();
            let responseData;

            try {
                responseData = JSON.parse(text);
            } catch {
                responseData = text;
            }
            console.log("Server response:", responseData);

            if (response.ok && responseData.id) {
                console.log("Registratie succesvol! Doorsturen naar login...");
                navigate("/login");
            } else {
                throw new Error(responseData.message || "Registratie mislukt");
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