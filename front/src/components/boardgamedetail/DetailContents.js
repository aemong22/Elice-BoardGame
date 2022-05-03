import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TagBtn from "./TagBtn";
import "./DetailContents.css";

function DetailContents({ gameData }) {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box
            className="detail-container"
            sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
          >
            <div
              style={{
                backgroundColor: "gray",
                width: "50%",
              }}
            >
              <div className="image"></div>
            </div>
            <div
              style={{
                backgroundColor: "#D6CCC2",
                width: "50%",
              }}
            >
              <div className="context">
                <div className="detail-title">{gameData.game_name}</div>
                {/* <div className="detail-description">
                  게임 인원 : {gameData.min_player} ~ {gameData.max_player}인용
                </div>
                <div className="detail-description">
                  게임 난이도 : {gameData.complexity_average}
                </div>
                <div className="detail-description">
                  게임 연령 : {gameData.min_age}세 이상
                </div>
                <div className="detail-description">
                  테마 : {gameData.domains}
                </div>
                <div className="detail-description">
                  게임 시간 : {gameData.min_playing_time} ~{" "}
                  {gameData.max_playing_time}분
                </div> */}
                <TagBtn
                  minPlayer={gameData.min_player}
                  maxPlayer={gameData.max_player}
                  complexity={gameData.complexity_average}
                  minAge={gameData.min_age}
                  domains={gameData.domains}
                  minPlayingTime={gameData.min_playing_time}
                  maxPlayingTime={gameData.max_playing_time}
                />
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default DetailContents;
