import React from "react";
import FavoriteList from "../../components/FavoriteList/FavoriteList";

const MyDadJokesPage = () => {
    const storedJokes = JSON.parse(localStorage.getItem("favoriteJokes")) || [];

    return (
        <div>
            <h2>Mijn Favoriete Grappen</h2>
            <ul>
                {storedJokes.length > 0 ? (
                    storedJokes.map((joke, index) => <li key={index}>{joke}</li>)
                ) : (
                    <p>Je hebt nog geen favoriete grappen opgeslagen.</p>
                )}
            </ul>
        </div>
    );
};

export default MyDadJokesPage;
