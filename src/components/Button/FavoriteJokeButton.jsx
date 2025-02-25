import React from "react";

const FavoriteJokeButton = ({ joke }) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;

    const saveFavoriteJoke = async () => {
        if (!joke) {
            console.error("Geen grap om op te slaan!");
            return;
        }
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": apiKey,
                },
                body: JSON.stringify({ joke }),
            });

            if (!response.ok) {
                throw new Error("Fout bij opslaan in favorieten");
            }

            console.log("Grap opgeslagen als favoriet!");
        } catch (error) {
            console.error("Er ging iets mis:", error);
        }
    };

    return <button onClick={saveFavoriteJoke} disabled={!joke}>
        Favoriet
    </button>;
};

export default FavoriteJokeButton;