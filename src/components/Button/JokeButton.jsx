import React from "react";

const JokeButton = ({ setJoke }) => {
    const fetchJoke = async () => {
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
            });
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error("Fout bij ophalen grap:", error);
            setJoke("Er is een fout opgetreden bij het ophalen van de grap.");
        }
    };

    return <button onClick={fetchJoke}>Nieuwe grap</button>;
};

export default JokeButton;


