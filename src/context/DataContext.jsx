import { createContext, useState, useContext, useEffect } from 'react';
import { fetchJoke } from "../services/api.js";

const DataContext = createContext();
const COOLDOWN_TIME = 10000; //Deze COOLDOWN_TIME had ik nodig vanwege een 429 melding//
let lastFetchTime = 0;
let isCooldownActive = false;

export function DataProvider({ children }) {
    const [joke, setJoke] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadJoke();
    }, []);

    async function loadJoke() {
        const now = Date.now();

        if (isCooldownActive || now - lastFetchTime < COOLDOWN_TIME) {
            console.warn("⏳ Wacht 10 sec voor je een nieuwe grap ophaalt! ⏰");
            return;
        }

        isCooldownActive = true; // 🚀 Zet cooldown aan
        setTimeout(() => { isCooldownActive = false; }, COOLDOWN_TIME);

        setLoading(true);
        setError(null);

        try {
            const newJoke = await fetchJoke();
            if (newJoke) {
                setJoke(newJoke);
                lastFetchTime = Date.now();
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
            if (!prev.some(fav => fav.id === joke.id)) {
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
