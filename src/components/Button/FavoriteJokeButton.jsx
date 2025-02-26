import React from "react";
import axios from "axios";

const FavoriteJokeButton = ({ joke }) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const saveFavoriteJoke = async () => {
        if (!joke) {
            console.error("Geen grap om op te slaan!");
            return;
        }
        try {
            const response = await axios.post(`${apiUrl}/favorieten`,
                { joke },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": apiKey,
                    },
                }
            );


            console.log("Grap opgeslagen als favoriet!", response.data);
        } catch (error) {
            console.error("Fout bij opslaan in favorieten:", error);
        }
    };

    return <button onClick={saveFavoriteJoke}>Favoriet</button>;
};

export default FavoriteJokeButton;
