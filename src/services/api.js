const API_URL = "https://icanhazdadjoke.com/";

export async function fetchJoke() {
    try {
        const response = await fetch(API_URL, {
            headers: {
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Fout bij het ophalen van de grap: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.joke;
    } catch (error) {
        console.error("Error fetching joke:", error);
        return "Waarom kunnen skeletten niet liegen? Ze hebben geen ruggengraat!";
    }
}
