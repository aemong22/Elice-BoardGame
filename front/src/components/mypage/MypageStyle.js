import { Grid, Box } from "@mui/material";
import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";

const MyBox = styled(Box)`
  border: solid 1px #ebebeb;
  border-radius: 10px;
  border-shadow: 0 2px 3px 0;
  position: relative;
  height: 83vh;
  margin: 4vh;
  paddin: 0;
  box-shadow: 5px 5px 12px -10px rgba(0, 0, 0, 1);
`;

const MyBox2 = styled(Box)`
  border-radius: 10px;
  background-color: #f3f0ec;
  width: 200px;
  height: auto;
  padding: 70px 0 50px 0;
  float: left;
  margin: 1%;
`;

const Title = styled(Grid)`
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 5%;
  margin-top: 10%;
`;

const ImgGrid = styled(Grid)`
  border: solid 4px #d6ccc2;
  border-radius: 100%;
  color: blue;
  aspect-ratio: 1 / 1;
  margin: 0 20%;
`;

const Photo = styled(Grid)`
  border-radius: 100%;
  height: 80%;
  aspect-ratio: 1 / 1;
  margin: 10%;
`;

const Name = styled(Grid)`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-align: center;
  padding: 7%;
  margin-bottom: 20px;
`;

const Profile2 = styled(Box)`
  border-radius: 0 30px 30px 0;
  background-color: #f3f0ec;
  width: 70%;
  height: 100%;
  float: right;
  margin: 0;
`;

const MyButton = styled(Button)`
  width: 100%;
  background-color: white;
  font-size: 20px;
  text-align: center;
  padding: 5%;
`;

export { MyBox, MyBox2, ImgGrid, Title, Photo, Name, Profile2, MyButton };
