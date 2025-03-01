import Button from "../../components/Button/ToDadJokesButton.jsx";

const HomePage = () => {
    return (
        <div>
            <h1>Zo slecht dat ze goed zijn! 😆</h1>
            <Button text="New Dad Joke" route="/new-dadjoke" />
        </div>
    );
};

export default HomePage;
