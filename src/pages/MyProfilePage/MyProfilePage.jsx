import { useState, useEffect } from 'react';
import axios from 'axios';
import PageLayout from '../../components/PageLayout/PageLayout';
import Writing from '../../assets/Writing.png';
import './MyProfilePage.css';

const MyProfilePage = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [instagram, setInstagram] = useState('');

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_NOVI_API_KEY;
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`${apiUrl}/users/${username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": apiKey,
                        "Authorization": `Bearer ${token}`
                    }
                });

                const userData = response.data;
                setName(userData.name || '');
                setLastName(userData.lastName || '');
                setEmail(userData.email || '');
                setCity(userData.city || '');
                setInstagram(userData.instagram || '');

            } catch (error) {
                console.error("Fout bij ophalen profiel:", error);
            }
        };

        fetchProfile();
    }, [apiUrl, apiKey, token, username]);

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
            await axios.put(`${apiUrl}/users/${username}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": apiKey,
                    "Authorization": `Bearer ${token}`
                }
            });
            alert("Profiel opgeslagen!");
        } catch (error) {
            console.error("Fout:", error);
            alert("Er is iets misgegaan.");
        }
    };

    return (
        <div className="my-profile-page-container">
            <PageLayout
                image={Writing}
                text="BEWERK HIER JE PROFIEL"
            >
                <form className="profile-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Voornaam" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Achternaam" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder="Woonplaats" value={city} onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />

                    <button type="submit" className="page-layout-button">VOLTOOID</button>
                </form>
            </PageLayout>
        </div>
    );
};

export default MyProfilePage;