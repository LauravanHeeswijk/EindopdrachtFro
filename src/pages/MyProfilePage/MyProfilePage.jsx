import { useState } from 'react';
import axios from 'axios';

const MyProfilePage = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [instagram, setInstagram] = useState('');

    useEffect(() => {
        setUsername(localStorage.getItem("username") || "");
        setToken(localStorage.getItem("token") || "");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: name,
            lastName: lastName,
            email: email,
            city: city,
            instagram: instagram,
        };

        try {
            await axios.put("https://api.datavortex.nl/dadjokes/users", data);
            alert("Profiel opgeslagen!");
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
                    <li>
                        <input type="text" placeholder="Voornaam" value={name} onChange={(e) => setName(e.target.value)} />
                    </li>
                    <li>
                        <input type="text" placeholder="Achternaam" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </li>
                    <li>
                        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </li>
                    <li>
                        <input type="text" placeholder="Woonplaats" value={city} onChange={(e) => setCity(e.target.value)} />
                    </li>
                    <li>
                        <input type="text" placeholder="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                    </li>
                </ul>
                <button type="submit">Verzenden</button>
            </form>
        </div>
    );
};

export default MyProfilePage;
