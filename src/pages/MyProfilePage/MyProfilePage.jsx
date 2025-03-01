import { useState, useEffect } from 'react';
import axios from 'axios';

const MyProfilePage = () => {
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [instagram, setInstagram] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedToken = localStorage.getItem("token");

        if (!storedUsername || !storedToken) {
            alert("Je moet eerst inloggen!");
        } else {
            setUsername(storedUsername);
            setToken(storedToken);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token || !username) {
            alert("Geen geldige sessie, log opnieuw in.");
            return;
        }

        const updatedData = {};
        if (name) updatedData.name = name;
        if (lastName) updatedData.lastName = lastName;
        if (email) updatedData.email = email;
        if (city) updatedData.city = city;
        if (instagram) updatedData.instagram = instagram;

        try {
            await axios.put(`https://api.datavortex.nl/dadjokes/users/${username}`, updatedData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert("Profiel succesvol opgeslagen!");
        } catch (error) {
            console.error("Fout:", error);
            alert("Er is iets misgegaan.");
        }
    };

    return (
        <div>
            <h2>Bewerk je profiel</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li><input type="text" placeholder="Voornaam" value={name} onChange={(e) => setName(e.target.value)} /></li>
                    <li><input type="text" placeholder="Achternaam" value={lastName} onChange={(e) => setLastName(e.target.value)} /></li>
                    <li><input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} /></li>
                    <li><input type="text" placeholder="Woonplaats" value={city} onChange={(e) => setCity(e.target.value)} /></li>
                    <li><input type="text" placeholder="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} /></li>
                </ul>
                <button type="submit">Verzenden</button>
            </form>
        </div>
    );
};

export default MyProfilePage;

