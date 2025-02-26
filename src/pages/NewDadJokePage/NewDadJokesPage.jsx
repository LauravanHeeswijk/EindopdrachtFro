import { useState } from "react";
import JokeButton from "../../components/Button/JokeButton";
import FavoriteJokeButton from "../../components/Button/FavoriteJokeButton";

const NewDadJokePage = () => {
    const [joke, setJoke] = useState(null);

    return (
        <div>
            <h1>New Dad Joke</h1>
            <JokeButton setJoke={setJoke} />
            {joke && <p>{joke}</p>}
            <FavoriteJokeButton joke={joke} />
        </div>
    );
};

export default NewDadJokePage;
