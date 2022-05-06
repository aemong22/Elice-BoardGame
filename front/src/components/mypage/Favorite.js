import { MyBox, Title, Total, Content } from "./FavoriteStyle.js";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";
import * as Api from "../../api";
import { Button, Grid } from "@mui/material";
import "../boardgame/BounceAnimation";

function Favorite() {
    const [wishes, setWishes] = useState(undefined);
    const navigate = useNavigate();

    const favoriteList = async () => {
        await Api.get("favorite/user").then((res) => {
            const favoritedata = res.data;
            setWishes(favoritedata[0].boardgame);
        });
    };
    useEffect(() => {
        favoriteList();
    }, []);

    return (
        <>
            <MyBox>
                <Title>
                    <FavoriteIcon /> 찜 목록
                </Title>
                <Total>
                    <span style={{ color: "black", fontSize: "23px" }}>
                        {wishes?.length}
                    </span>
                    {"  "} Total
                </Total>
                {wishes?.length > 0 ? (
                    <>
                        <Content>
                            {wishes?.map((wish) => (
                                <FavoriteCard
                                    key={wish.game_id}
                                    wish={wish}
                                    onLikeClick={() => {
                                        favoriteList();
                                    }}
                                />
                            ))}
                        </Content>
                    </>
                ) : (
                    <Grid
                        sx={{
                            textAlign: "center",
                            margin: "9%",
                            height: "50px",
                        }}
                    >
                        <div class="container">
                            <div class="logo" />
                        </div>
                        <div>아직 찜한 보드게임이 없습니다.</div>
                        <Button onClick={() => navigate("/boardgame")}>
                            보드게임 구경하기
                        </Button>
                    </Grid>
                )}
            </MyBox>
        </>
    );
}

export default Favorite;
