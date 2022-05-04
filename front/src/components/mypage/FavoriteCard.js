function FavoriteCard({ wish }) {
    console.log("favorite", wish);

    return (
        <>
            <div>안녕</div>
            <div>{wish?.game_name}</div>
        </>
    );
}

export default FavoriteCard;
