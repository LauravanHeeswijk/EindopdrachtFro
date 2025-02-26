import React from "react";
import axios from "axios";

const FavoriteJokeButton = ({ joke }) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    const saveFavoriteJoke = async () => {
        if (!joke) {
            alert("Geen grap om op te slaan!");
            return;
        }

        if (!token || !username) {
            alert("Log eerst in om favorieten op te slaan.");
            return;
        }

        try {
            console.log("Huidige favorieten ophalen...");
            const response = await axios.get(`${apiUrl}/users/${username}/info`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const huidigeFavorieten = response.data.info || "";
            const nieuweFavorieten = huidigeFavorieten ? `${huidigeFavorieten}\n${joke}` : joke;

            console.log("Favoriet opslaan...");
            await axios.put(
                `${apiUrl}/users/${username}`,
                { info: nieuweFavorieten },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("Grap toegevoegd aan favorieten!");
        } catch (error) {
            console.error("Fout bij opslaan:", error.response?.data || error.message);
            alert("Er ging iets mis. Probeer opnieuw.");
        }
    };

    return <button onClick={saveFavoriteJoke}>Favoriet</button>;
};

export default FavoriteJokeButton;

