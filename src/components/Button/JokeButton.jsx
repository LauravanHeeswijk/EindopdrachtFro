import { useState, useEffect } from "react";

const JokeButton = () => {
    const [joke, setJoke] = useState(null);

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

    return (
        <div>
            <p>{joke || "Laden..."}</p>
            <button onClick={fetchJoke}>New Dad Joke</button>
        </div>
    );
};

export default JokeButton;


