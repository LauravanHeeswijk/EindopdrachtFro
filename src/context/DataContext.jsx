import { createContext, useState, useContext } from 'react';
import { fetchJoke } from "../services/api.js";

const DataContext = createContext();

export function DataProvider({ children }) {
    const [joke, setJoke] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function loadJoke() {
        setLoading(true);
        setError(null);

        try {
            const newJoke = await fetchJoke();
            if (newJoke) {
                setJoke(newJoke);
            } else {
                setError("Kan geen grap ophalen.");
            }
        } catch (err) {
            setError("Er is een probleem opgetreden bij het laden van de grap.");
        }

        setLoading(false);
    }

    function addToFavorites(joke) {
        setFavorites((prev) => {
            if (!prev.includes(joke)) {
                return [...prev, joke];
            }
            return prev;
        });
    }

    return (
        <DataContext.Provider value={{ joke, loadJoke, favorites, addToFavorites, loading, error }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
