import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JokeButton from "../../components/Button/JokeButton";
import FavoriteJokeButton from "../../components/Button/FavoriteJokeButton";
import PageLayout from "../../components/PageLayout/PageLayout";
import Smiley from "../../assets/Smiley.png";



const NewDadJokePage = () => {
    const [joke, setJoke] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="new-dad-joke-page">
            <PageLayout
                text="Voeg een Dad Joke toe!"
                buttonText="NEW DAD JOKE"
                buttonAction={() => setJoke(null)}
                image={Smiley}
            />

            <div className="joke-button-section">
                <JokeButton setJoke={setJoke} />
            </div>

            {joke && (
                <div className="joke-section">
                    <h3 className="joke-title">DAD JOKE:</h3>
                    <p className="joke-text">{joke}</p>

                    <div className="joke-buttons">
                        <FavoriteJokeButton joke={joke} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewDadJokePage;
