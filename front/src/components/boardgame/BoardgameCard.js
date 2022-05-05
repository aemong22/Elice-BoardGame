import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categoryData } from "./BoardgameCategoryData"
import * as Api from "../../api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
    favorite,
}) {
    const navigate = useNavigate();
    const [favoriteToggle, setFavoriteToggle] = useState(favorite);
    const maxLength = 13;
    const boardgameName = name.length > maxLength ? name.substr(0, maxLength) + "..." : name;

    const tagData = [
        min_player === max_player
            ? `${max_player}인용`
            : `${min_player}~${max_player}인용`,
        categoryData["complexity"][String(Math.floor(complexity_average))],
        `${min_age}세 이상`,
        ...theme,
        min_playing_time === max_playing_time
            ? `${max_playing_time}분`
            : `${min_playing_time}~${max_playing_time}분`,
    ];

    const getFavorite = async () => {
        const res = await Api.get("favorite", id);
        const favoriteData = res.data;
        setFavoriteToggle(favoriteData);
    };

    const favoriteHandler = async () => {
        await Api.put("favorite", {
            boardgameId: id,
            toggle: !favoriteToggle,
        });
        setFavoriteToggle(!favoriteToggle);
        getFavorite();
    };

    
    // useEffect(() => {
    //     getFavorite();
    // }, [favoriteToggle]);

    return (
        <div>
            <Card sx={{ width: 250, maxWidth: 270, my: 5, mx: 5 }}>
                <CardActionArea
                    onClick={() => navigate(`/boardgame/detail/${id}`)}
                >
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
                        </div>
                        <div style={{ height: 100, alignItems: "start" }}>
                        {tagData.map((tag) => (
                            <Button
                            variant="outlined"
                            disabled
                            sx={{ fontSize: "0.5rem", borderRadius: "100px", m: "2px" }}
                            key={tag}
                            >
                            {tag}
                            </Button>
                        ))}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <IconButton
                sx={{ position: 'relative', left: 235, top: -200 }}
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
    );
}

export default BoardgameCard;
