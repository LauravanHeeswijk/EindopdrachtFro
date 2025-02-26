import React from "react";
import { useState } from "react";
import apiClient from "../../api/axiosClient";

const JokeButton = ({ setJoke }) => {
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        try {
            const response = await apiClient.get("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
            });

            setJoke(response.data.joke);
        } catch (error) {
            console.error("Fout bij ophalen grap:", error);
        } finally {
            setLoading(false);
        }
    };

    return <button onClick={fetchJoke}>Nieuwe grap</button>;
};

export default JokeButton;


