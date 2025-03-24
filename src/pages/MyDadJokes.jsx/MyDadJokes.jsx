import React, { useState } from "react";
import JokeSwiper from "../../components/Swiper/Swiper.jsx";
import PageLayout from "../../components/PageLayout/PageLayout";
import Laugh from "../../assets/Laugh.png";
import "./MyDadJokes.css";

const MyDadJokesPage = () => {
    const storedJokes = JSON.parse(localStorage.getItem("favoriteJokes")) || [];
    const [showSwiper, setShowSwiper] = useState(false);

    const handleShowJokes = () => {
        setShowSwiper(true);
    };

    return (
        <div className="my-dad-jokes-container">
            <PageLayout
                image={Laugh}
                text="BEKIJK AL JE FAVORIETE DAD JOKES!"
                buttonText="FAVORIETE 👇🏽"
                buttonAction={handleShowJokes}
            />

            {showSwiper && (
                <>
                    {storedJokes.length > 0 ? (
                        <JokeSwiper jokes={storedJokes} />
                    ) : (
                        <p className="no-favorites-message">Je hebt nog geen favorieten toegevoegd!</p>
                    )}
                </>
            )}
        </div>
    );
};

export default MyDadJokesPage;
