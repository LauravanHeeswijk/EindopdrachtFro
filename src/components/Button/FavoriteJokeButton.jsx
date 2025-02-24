const FavoriteJokeButton = ({ onClick }) => {
    return (
        <button className="favorite-button" onClick={onClick}>
            Favoriet 🤩
        </button>
    );
};

export default FavoriteJokeButton;