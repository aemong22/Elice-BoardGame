import {
    CardMedia,
    Typography,
    Button,
    IconButton,
    CardActions,
    CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GameCard, CardContent } from "./FavoriteStyle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import * as Api from "../../api";

function FavoriteCard({ wish, onLikeClick }) {
    const [like, setLike] = useState(true);
    const navigate = useNavigate();

    const favoriteHandler = () => {
        Api.put("favorite", {
            boardgameId: wish.game_id,
            toggle: !like,
        }).then(() => {
            setLike(!like);
            if (typeof onLikeClick === "function") {
                onLikeClick();
            }
        });
    };

    const maxLength = 10;
    const boardgameName =
        wish.game_name.length > maxLength
            ? wish.game_name.substr(0, maxLength) + "..."
            : wish.game_name;
    console.log(wish);
    return (
        <>
            {like ? (
                <GameCard sx={{ width: 170, my: 2, mx: 1.5 }}>
                    <CardActionArea
                        onClick={() =>
                            navigate(`/boardgame/detail/${wish.game_id}`)
                        }
                    >
                        <CardMedia
                            component="img"
                            width="170"
                            height="170"
                            image={wish.image}
                            alt="보드게임 이미지"
                        />
                    </CardActionArea>
                    <CardContent>
                        <div
                            style={{
                                display: "flex",

                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: 17, m: 0 }}
                                component="span"
                            >
                                {boardgameName}
                            </Typography>
                            <CardActions
                                disableSpacing={false}
                                sx={{
                                    margin: "0 1px 0 0",
                                }}
                            >
                                <IconButton
                                    aria-label="add to favorites"
                                    sx={{ p: 0, m: 0 }}
                                    onClick={favoriteHandler}
                                >
                                    {like ? (
                                        <FavoriteIcon
                                            sx={{ color: "#FF5A5A" }}
                                        />
                                    ) : (
                                        <FavoriteIcon sx={{ color: "gray" }} />
                                    )}
                                </IconButton>
                            </CardActions>
                        </div>
                        <div>
                            <Button
                                variant="outlined"
                                sx={{
                                    fontSize: "0.5rem",
                                    borderRadius: "100px",
                                    m: "3px",
                                    p: "3px",
                                }}
                            >
                                {wish.min_player === wish.max_player
                                    ? `${wish.max_player}인용`
                                    : `${wish.min_player}~${wish.max_player}인용`}
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    fontSize: "0.5rem",
                                    borderRadius: "100px",
                                    m: "3px",
                                    p: "3px",
                                }}
                            >
                                {`${wish.min_age}세 이하`}
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    fontSize: "0.5rem",
                                    borderRadius: "100px",
                                    m: "3px",
                                    p: "2px",
                                }}
                            >
                                {wish.min_playing_time === wish.max_playing_time
                                    ? `${wish.max_playing_time}분`
                                    : `${wish.min_playing_time}~${wish.max_playing_time}분`}
                            </Button>
                            {wish.theme[0] === "" ? null : (
                                <Button
                                    key={wish.theme[0]}
                                    variant="outlined"
                                    sx={{
                                        fontSize: "0.5rem",
                                        borderRadius: "100px",
                                        m: "2px",
                                        p: "2px",
                                    }}
                                >
                                    {wish.theme[0]}
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </GameCard>
            ) : null}
        </>
    );
}

export default FavoriteCard;
