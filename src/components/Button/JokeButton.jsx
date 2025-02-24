const JokeButton = ({ onClick }) => {
    return (
        <button className="favorite-button" onClick={onClick}>
            Haal nieuwe DadJoke op!
        </button>
    );
};

export default JokeButton;

