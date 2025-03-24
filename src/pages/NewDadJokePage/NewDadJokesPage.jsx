import React, { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import FavoriteJokeButton from "../../components/Button/FavoriteJokeButton";
import Smiley from "../../assets/Smiley.png";
import "./NewDadJokesPage.css";
import Gradientbar from "../../components/Gradientbar/Gradientbar.jsx";

function NewDadJokePage() {
    const [joke, setJoke] = useState("");

    async function getNewJoke() {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" }
        });
        const data = await response.json();
        setJoke(data.joke);
    }

    return (
        <div className="new-dad-joke-page-container">
            <PageLayout
                text="VOEG EEN DAD JOKE TOE!"
                buttonText="NEW DAD JOKE"
                buttonAction={getNewJoke}
                image={Smiley}
            >
                {joke && (
                    <div className="joke-section">
                        <h3>NEW DAD JOKE:</h3>
                        <p>{joke}</p>

                        <div className="joke-buttons">
                            <FavoriteJokeButton joke={joke} />
                        </div>
                    </div>
                )}
            </PageLayout>
        </div>
);
}

export default NewDadJokePage;
