import { useData } from "../../context/DataContext.jsx";

function FavoritesList() {
    const { favorites } = useData();

    console.log("Favorites array:", favorites); // Debug log

    return (
        <div>
            <h2>Favoriete Grappen</h2>
            {favorites?.length === 0 ? (
                <p>Je hebt nog geen favoriete grappen.</p>
            ) : (
                <ul>
                    {favorites.map((joke, index) => {
                        console.log("Joke object:", joke); // Debug log
                        return <li key={index}>
                            {typeof joke === "string" ? joke : joke?.text || "Onbekende grap"}
                        </li>;
                    })}
                </ul>
            )}
        </div>
    );
}

export default FavoritesList;

