import React, { useState } from "react";
import { CssBaseline, Box, Container, Fab, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TagBtn from "./TagBtn";
import "./DetailContents.css";

function DetailContents({ gameData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "34%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "40%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
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
              <div className="image">
                <img
                  style={{ width: "100%" }}
                  src={gameData.image}
                  alt={gameData.game_name}
                />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#D6CCC2",
                width: "50%",
              }}
            >
              <div className="context">
                <div className="detail-title">{gameData.game_name}</div>
                <div style={{ margin: "0 10% 10% 10%" }}>
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
                <span id="wordCloudBtn">
                  <Fab size="medium" color="primary" aria-label="add">
                    <AddIcon onClick={handleOpen} />
                  </Fab>
                </span>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                  </Box>
                </Modal>
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default DetailContents;
