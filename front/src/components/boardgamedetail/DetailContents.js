import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
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
                <div className="detail-description">{gameData.description}</div>
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default DetailContents;
