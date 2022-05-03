import Button from "@mui/material/Button";

function TagBtn({
  minPlayer,
  maxPlayer,
  complexity,
  minAge,
  domains,
  minPlayingTime,
  maxPlayingTime,
}) {
  return (
    <>
      <Button
        variant="outlined"
        disabled
        sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
      >
        {minPlayer === maxPlayer ? (
          <span>{maxPlayer}인용</span>
        ) : (
          <span>
            {minPlayer}~{maxPlayer}인용
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
        {minAge}세 이상
      </Button>

      <Button
        variant="outlined"
        disabled
        sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
      >
        {minPlayingTime === maxPlayingTime ? (
          <span>{maxPlayingTime}분</span>
        ) : (
          <span>
            {minPlayingTime}~{maxPlayingTime}분
          </span>
        )}
      </Button>
    </>
  );
}

export default TagBtn;
