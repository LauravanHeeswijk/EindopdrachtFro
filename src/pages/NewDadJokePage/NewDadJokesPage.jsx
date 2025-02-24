import React from "react";
import JokeButton from "../../components/Button/JokeButton";
import FavoriteJokeButton from "../../components/Button/FavoriteJokeButton";
import StupidJokeButton from "../../components/Button/StupidJokeButton";


const NewDadJokesPage = () => {
    return (
        <div>
            <h1>New Dad Joke</h1>
            {/* Hier komen straks de componenten */}
                <JokeButton />

        {/*    /!* Knoppen voor interactie *!/*/}
            <div className="button-group">
                <FavoriteJokeButton />
                <StupidJokeButton />
            </div>
        </div>
    );
};
export default NewDadJokesPage;
