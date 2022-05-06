import { Grid, Box } from "@mui/material";

import Button from "@material-ui/core/Button";
import styled from "@emotion/styled";

const MyBox = styled(Box)`
    border: solid 1px #d6ccc2;
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    height: 350px;
    margin: 10% auto;
    text-align: center;
`;

const Title = styled(Grid)`
    font-size: 20px;
    font-weight: bold;
    color: black;
    padding: 10%;
    margin-bottom: 3%;
`;

const SubContent = styled(Grid)`
    padding: 1%;
    height: 80px;
    margin-bottom: 5px;
`;

const MyButton = styled(Button)`
    margin: 10px;
    width: 60%;
    font-weight: bold;
    color: #ffffff;
    background-color: #d6ccc2;
    font-size: 20px;
    text-align: center;
    border-radius: 30px;
    padding: ;

    :hover {
        background-color: black;
    }
`;
export { MyBox, Title, SubContent, MyButton };
