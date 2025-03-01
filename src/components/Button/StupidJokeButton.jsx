const StupidJokeButton = ({ onClick, label }) => {
    return (
        <button className="stupid-button" onClick={onClick}>
            Stomme grap, verwijderen 🗑️
        </button>
    );
};

export default StupidJokeButton;