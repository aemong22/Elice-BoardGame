import {
  Grid,
  Box,
  Input,
  inputBaseClasses,
  InputBase,
  FormHelperText,
} from "@mui/material";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MyBox = styled(Box)`
  border-radius: 0 30px 30px 0;
  background-color: #f3f0ec;
  width: 70%;
  height: 100%;
  float: right;
`;

const Title = styled(Grid)`
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 5%;
`;

const StyledInput = styled(InputBase)`
  width: 100%;
  padding: 1%;
  background: white;
  border-radius: 8px;
  border: 1px solid #d6ccc2;

  &:hover {
    border-color: #d4ccc3;
  }
`;

const Content = styled(Grid)`
  width: 70%;
  margin: 0 auto;
`;

const SubTitle = styled(Grid)`
  font-size: 15px;
  color: black;
  width: 90%;
  padding: 1%;
`;

const SubContent = styled(Grid)`
  padding: 3%;
  height: 15%;
`;

const HelperText = styled(FormHelperText)`
  font-size: 10px;
  color: gray;
`;
export { MyBox, Title, StyledInput, Content, SubTitle, SubContent, HelperText };