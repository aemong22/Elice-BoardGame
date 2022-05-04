import Button from "@mui/material/Button";

function TagBtn({ gameData }) {
    const {
        max_player,
        min_player,
        complexity_average,
        min_age,
        theme,
        min_playing_time,
        max_playing_time,
    } = gameData;

    const tagData = [
        max_player === min_player
            ? `${max_player}인용`
            : `${min_player}~${max_player}인용`,
        `난이도 ${Math.floor(complexity_average)}`,
        `${min_age}세 이상`,
        ...theme,
        min_playing_time === max_playing_time
            ? `${max_playing_time}분`
            : `${min_playing_time}~${max_playing_time}분`,
    ];

    return (
        <>
            {tagData.map((tag) => (
                <Button
                    variant="outlined"
                    disabled
                    sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
                    key={tag}
                >
                    {tag}
                </Button>
            ))}
        </>
    );
}

export default TagBtn;
