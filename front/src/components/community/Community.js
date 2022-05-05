import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
    List,
    ListItemButton,
    ListSubheader,
    Box,
    Container,
    ListItemText,
    CssBaseline,
    Divider,
} from "@mui/material/";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import * as Api from "../../api";

function community() {
    const navigate = useNavigate();
    const [allContents, setAllContents] = useState(undefined);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    const fetchContentsInfo = async () => {
        try {
            const res = await Api.get("communitycontents");
            setAllContents(res.data);
            setIsFetchCompleted(true);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchContentsInfo();
    }, []);

    if (!isFetchCompleted) {
        return <div>로딩중...</div>;
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box
                    sx={{
                        width: "100%",
                        height: "100vh",
                        marginTop: "60px",
                    }}
                >
                    <List
                        sx={{
                            width: "100%",
                            bgcolor: "background.paper",
                        }}
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                            style={{
                                textAlign: "center",
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>자유게시판</span>
                            <BorderColorIcon
                                onClick={() =>
                                    navigate("/communitycontents/create")
                                }
                            />
                        </ListSubheader>
                        <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                            style={{
                                textAlign: "center",
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "0 5% 0 5%",
                            }}
                        >
                            <span>번호</span>
                            <span>제목</span>
                            <span>작성자</span>
                            <span>날짜</span>
                        </ListSubheader>
                        <Divider />
                        {allContents?.map((content, idx) => (
                            <ListItemButton style={{ width: "100%" }}>
                                <ListItemText
                                    secondary={idx}
                                    sx={{ width: 20 }}
                                />
                                <ListItemText
                                    secondary={content.title}
                                    style={{ textAlign: "center" }}
                                />
                                <ListItemText
                                    secondary={content.author}
                                    style={{ textAlign: "center" }}
                                />
                                <ListItemText
                                    secondary={content.createdAt.slice(0, 10)}
                                    style={{ textAlign: "end" }}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default community;
