import React from "react";
import { useNavigate } from "react-router-dom";
import { categoryData } from "./BoardgameCategoryData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

function BoardgameCard({
    id,
    name,
    min_player,
    max_player,
    theme,
    image,
    min_age,
    complexity_average,
    min_playing_time,
    max_playing_time,
}) {
    const navigate = useNavigate();

    const maxLength = 13;
    const boardgameName =
        name.length > maxLength ? name.substr(0, maxLength) + "..." : name;

    return (
        <Card sx={{ width: 250, maxWidth: 270, my: 5, mx: 5 }}>
            <CardActionArea onClick={() => navigate(`/boardgame/detail/${id}`)}>
                <CardMedia
                    component="img"
                    height="240"
                    image={image}
                    alt={name}
                    sx={{ background: "gray" }}
                />
                <CardContent>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography gutterBottom variant="h6" component="span">
                            {boardgameName}
                        </Typography>
                        <CardActions
                            disableSpacing
                            sx={{ margin: "auto 0 auto auto" }}
                        >
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>
                    </div>
                    <div style={{ height: 100, alignItems: "start" }}>
                        <Button
                            variant="outlined"
                            disabled
                            sx={{
                                fontSize: "0.5rem",
                                borderRadius: "100px",
                                m: "2px",
                            }}
                        >
                            {min_player === max_player
                                ? `${max_player}인용`
                                : `${min_player}~${max_player}인용`}
                        </Button>
                        <Button
                            variant="outlined"
                            disabled
                            sx={{
                                fontSize: "0.5rem",
                                borderRadius: "100px",
                                m: "2px",
                            }}
                        >
                            {`${min_age}세 이하`}
                        </Button>
                        <Button
                            variant="outlined"
                            disabled
                            sx={{
                                fontSize: "0.5rem",
                                borderRadius: "100px",
                                m: "2px",
                            }}
                        >
                            {
                                categoryData["complexity"][
                                    String(Math.floor(complexity_average))
                                ]
                            }
                        </Button>
                        <Button
                            variant="outlined"
                            disabled
                            sx={{
                                fontSize: "0.5rem",
                                borderRadius: "100px",
                                m: "2px",
                            }}
                        >
                            {min_playing_time === max_playing_time
                                ? `${max_playing_time}분`
                                : `${min_playing_time}~${max_playing_time}분`}
                        </Button>
                        {theme[0] === ""
                            ? null
                            : theme.map((data) => (
                                  <Button
                                      key={data}
                                      variant="outlined"
                                      disabled
                                      sx={{
                                          fontSize: "0.5rem",
                                          borderRadius: "100px",
                                          m: "2px",
                                      }}
                                  >
                                      {data}
                                  </Button>
                              ))}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BoardgameCard;
