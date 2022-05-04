import Button from "@mui/material/Button";

function TagBtn({ gameData }) {
  const {
    max_player,
    min_player,
    complexity,
    min_age,
    theme,
    min_playing_time,
    max_playing_time,
  } = gameData;
  return (
    <>
      <Button
        variant="outlined"
        disabled
        sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
      >
        {min_player === max_player ? (
          <span>{max_player}인용</span>
        ) : (
          <span>
            {min_player}~{max_player}인용
          </span>
        )}
      </Button>
      {/* {domains[0] === ""
        ? null
        : domains.map((domain, idx) => (
            <Button
              key={`${domain}_${idx}`}
              variant="outlined"
              disabled
              sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
            >
              {domain}
            </Button>
          ))} */}

      <Button
        variant="outlined"
        disabled
        sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
      >
        난이도 {complexity}{" "}
      </Button>

      <Button
        variant="outlined"
        disabled
        sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
      >
        {min_age}세 이상
      </Button>

      <Button
        variant="outlined"
        disabled
        sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
      >
        {min_playing_time === max_playing_time ? (
          <span>{max_playing_time}분</span>
        ) : (
          <span>
            {min_playing_time}~{max_playing_time}분
          </span>
        )}
      </Button>
    </>
  );
}

export default TagBtn;
