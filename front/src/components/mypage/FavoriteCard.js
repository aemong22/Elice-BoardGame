import { CardContent, CardMedia, Typography } from "@mui/material";
import { GameCard } from "./FavoriteStyle";

function FavoriteCard({ wish }) {
    return (
        <>
            <GameCard sx={{ width: 180, my: 1, mx: 1 }}>
                <CardMedia
                    component="img"
                    width="180"
                    height="180"
                    image={wish.image}
                    alt="보드게임 이미지"
                />
                <CardContent>
                    <Typography sx={{ fontSize: 18 }} component="div">
                        {wish.game_name}
                    </Typography>
                </CardContent>
            </GameCard>
        </>
    );
}

export default FavoriteCard;
