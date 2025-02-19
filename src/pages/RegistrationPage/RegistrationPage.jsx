import { useState } from "react";
import useNavigate from "react-router-dom";

const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [navigate, setNavigate] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

if (password !== confirmPassword) {
    setError("Wachtwoord komt niet overeen");
    return;
}
    try {
        const response = await fetch("https://api.datavortex.nl/dadjokes/users/register", {
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

        navigate("/login"); // Na registratie naar loginpagina
    } catch (error) {
        console.error("Fout bij registreren:", error.message);
        setError("Registratie mislukt, probeer opnieuw.");
    }
};

return (

};

export default RegistrationPage;