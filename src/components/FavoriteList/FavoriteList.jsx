import React, { useEffect, useState } from "react";
import axios from "axios";

const FavoriteList = () => {
    const [favorites, setFavorites] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const username = "testuser";

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await axios.get(`${apiUrl}/users/${username}/info`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setFavorites(response.data.info ? response.data.info.split("\n") : []);
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
