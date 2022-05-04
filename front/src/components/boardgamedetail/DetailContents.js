import React, { useState, useParams, useEffect } from "react";
import {
    CssBaseline,
    Box,
    Container,
    Fab,
    Modal,
    IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TagBtn from "./TagBtn";
import DetailTab from "./DetailTab";
import * as Api from "../../api";
import "./DetailContents.css";

function DetailContents({ gameData }) {
    const [open, setOpen] = useState(false);
    const [favoriteToggle, setFavoriteToggle] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const favoriteHandler = async () => {
        const res = await Api.put("favorite", {
            boardgameId: gameData.game_id,
            toggle: !favoriteToggle,
        });

        setFavoriteToggle(!favoriteToggle);
    };

    const getFavorite = async () => {
        const res = await Api.get("favorite", gameData.game_id);
        const favoriteData = res.data;
        setFavoriteToggle(favoriteData);
    };

    useEffect(() => {
        getFavorite();
    }, []);

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
                        sx={{
                            bgcolor: "#F4F2EF",
                            height: "100vh",
                            padding: "0 5% 5% 5%",
                        }}
                    >
                        <div className="container-top">
                            <div className="container-top-left">
                                <div className="image">
                                    <img
                                        style={{
                                            width: "100%",
                                            boxShadow:
                                                "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                        }}
                                        src={gameData.image}
                                        alt={gameData.game_name}
                                    />
                                </div>
                            </div>
                            <div className="container-top-right">
                                <div className="detail-context">
                                    <div id="favoriteBtn">
                                        <IconButton
                                            aria-label="add to favorites"
                                            onClick={favoriteHandler}
                                        >
                                            {favoriteToggle ? (
                                                <FavoriteIcon />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </IconButton>
                                    </div>

                                    <div className="detail-title">
                                        {gameData.game_name}
                                    </div>
                                    <div style={{ margin: "0 10% 10% 10%" }}>
                                        <TagBtn gameData={gameData} />
                                    </div>
                                    <span id="wordCloudBtn">
                                        <Fab
                                            size="medium"
                                            color="primary"
                                            aria-label="add"
                                        >
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
                                            <img
                                                src={gameData.wordcloud}
                                                alt="워드클라우드"
                                                style={{ width: "100%" }}
                                            />
                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        <div className="container-bottom">
                            <DetailTab gameData={gameData} />
                        </div>
                    </Box>
                </Container>
            </React.Fragment>
        </>
    );
}

export default DetailContents;
