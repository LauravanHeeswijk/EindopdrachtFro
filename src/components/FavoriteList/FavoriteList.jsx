import React from 'react';
import { useData } from "../../context/DataContext.jsx";

const FavoriteList = () => {
    const { favorites } = useData();

    if (favorites.length === 0) {
        return <p> Je hebt nog geen favoriete grap! </p>
    }

    return (
        <div>
            <H2>Favorieten grappen!</H2>
            <ul>
                {favorites.map((joke) => (
                    <li key={joke.id}>
                        {joke.setup} - {joke.punchline}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;
