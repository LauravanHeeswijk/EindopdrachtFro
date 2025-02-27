import React, { useEffect, useState } from "react";
import axios from "axios";

const FavoriteList = () => {
    const [favorites, setFavorites] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!token || !username) {
                console.error("Geen gebruiker ingelogd!");
                return;
            }

            try {
                const response = await axios.get(`${apiUrl}/users/${username}/info`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                const jokes = response.data.info ? response.data.info.split("\n") : [];
                setFavorites(jokes);
            } catch (error) {
                console.error("Fout bij ophalen favorieten:", error);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <div>
            <h2>Mijn Favoriete Grappen</h2>
            <ul>
                {favorites.length > 0 ? favorites.map((joke, index) => (
                    <li key={index}>{joke}</li>
                )) : (
                    <p>...</p>
                )}
            </ul>
        </div>
    );
};

export default FavoriteList;
