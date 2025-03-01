import React from "react";
import JokeSwiper from "../../components/Swiper/Swiper.jsx";

const MyDadJokesPage = () => {
    const storedJokes = JSON.parse(localStorage.getItem("favoriteJokes")) || [];

    return (
        <div>
            <h2>Mijn Favoriete Grappen</h2>
            {storedJokes.length > 0 ? (
                <JokeSwiper jokes={storedJokes}/>
            ) : (
                <p>Je hebt nog geen favorieten toegevoegd!</p>
            )}
        </div>
    );
};

export default MyDadJokesPage;
