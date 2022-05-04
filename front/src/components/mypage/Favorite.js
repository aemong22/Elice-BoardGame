import { MyBox, Title, Total, Content } from "./FavoriteStyle.js";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteCard from "./FavoriteCard";
import * as Api from "../../api";

function Favorite() {
    const [wishes, setWishes] = useState(undefined);
    const [count, setCount] = useState(0);
    const favoriteList = async () => {
        await Api.get("favorite/user").then((res) => {
            const favoritedata = res.data;
            setWishes(favoritedata[0].boardgame);
            setCount(wishes?.length);
            console.log("카운트", count);
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
                <Total> {count} / Total </Total>
                <Content>
                    {wishes?.map((wish) => (
                        <FavoriteCard key={wish.game_id} wish={wish} />
                    ))}
                </Content>
            </MyBox>
        </>
    );
}

export default Favorite;
