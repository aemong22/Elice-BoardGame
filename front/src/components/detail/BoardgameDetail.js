import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "../Header";
import "./BoardgameDetail.css";

const BoardgameDetail = () => {
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
                <div className="detail-title">보드게임 이름</div>
                <div className="detail-description">
                  보드게임 설명입니다. 보드게임 설명입니다.보드게임
                  설명입니다.보드게임 설명입니다.보드게임 설명입니다.보드게임
                  설명입니다.보드게임 설명입니다.보드게임 설명입니다.보드게임
                  설명입니다.보드게임 설명입니다보드게임 설명입니다.
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default BoardgameDetail;
