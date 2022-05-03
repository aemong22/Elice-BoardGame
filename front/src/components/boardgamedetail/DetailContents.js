import React, { useState } from "react";
import { CssBaseline, Box, Container, Fab, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TagBtn from "./TagBtn";
import "./DetailContents.css";
import DetailTab from "./DetailTab";

function DetailContents({ gameData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "40%",
    bgcolor: "background.paper",
    boxShadow: 35,
    p: 4,
  };
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box
            className="detail-container"
            sx={{ bgcolor: "#F4F2EF", height: "100vh", padding: "0 5% 5% 5%" }}
          >
            <div className="container-top">
              <div className="container-top-left">
                <div className="image">
                  <img
                    style={{
                      width: "100%",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    }}
                    src={gameData.image}
                    alt={gameData.game_name}
                  />
                </div>
              </div>
              <div className="container-top-right">
                <div className="detail-context">
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
            </div>

            <div className="container-bottom">
              <DetailTab />
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}

export default DetailContents;
