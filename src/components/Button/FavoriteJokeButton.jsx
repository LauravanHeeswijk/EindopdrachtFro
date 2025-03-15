import React from "react";
import "./FavoriteJokeButton.css";

const FavoriteJokeButton = ({ joke }) => {
    const saveFavoriteJoke = () => {
        if (!joke) {
            alert("Geen grap om op te slaan!");
            return;
        }
        const existingJokes = JSON.parse(localStorage.getItem("favoriteJokes")) || [];

        existingJokes.push(joke);

        localStorage.setItem("favoriteJokes", JSON.stringify(existingJokes));

        alert("Grap toegevoegd aan favorieten!");
    };

    return <button onClick={saveFavoriteJoke}>Favoriet</button>;
};

export default FavoriteJokeButton;
