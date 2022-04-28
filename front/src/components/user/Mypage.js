import react, { useState, useEffect } from "react";
import * as Api from "../../api";

import Header from "../Header";
import Profile from "./Profile";
import { Container, Grid } from "@mui/material";
import { StylesProvider } from "@material-ui/core";

import {
  MyBox,
  MyBox2,
  ImgGrid,
  Title,
  Photo,
  Name,
  MyButton,
} from "./MypageStyle";

function Mypage() {
  const [Modify, setModify] = useState(true);
  const [ownerData, setOwnerData] = useState([]);

  const fetchPorfolioOwner = async () => {
    const res = await Api.get("currentUser");
    setOwnerData(res.data);
  };

  useEffect(() => {
    fetchPorfolioOwner();
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <MyBox>
          <MyBox2>
            <Title>My Page</Title>
            <ImgGrid>
              <Photo
                style={{
                  backgroundImage: `url(https://pinkpig-bucket.s3.ap-northeast-2.amazonaws.com/${ownerData.image}.png)`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </ImgGrid>
            <Name>{ownerData.user_name}</Name>
            <Grid>
              <StylesProvider injectFirst>
                <MyButton onClick={() => setModify(true)}>profile</MyButton>
                <MyButton id="button" onClick={() => setModify(false)}>
                  Favorite
                </MyButton>
              </StylesProvider>
            </Grid>
          </MyBox2>
          {Modify ? (
            <Profile ownerData={ownerData} setOwnerData={setOwnerData} />
          ) : null}
        </MyBox>
      </Container>
    </>
  );
}

export default Mypage;
