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

function community() {
    const navigate = useNavigate();
    const [allContents, setAllContents] = useState(undefined);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    const fetchContentsInfo = async () => {
        try {
            const res = await Api.get("communitycontents");
            setAllContents(res.data);
            setIsFetchCompleted(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPostsInfo();
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
                        bgcolor: "#cfe8fc",
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
                            }}
                        >
                            <span>자유게시판</span>
                            <span>글쓰기</span>
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
                        {/* {allContents?.map((content, idx) => (
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
                                    secondary="날짜"
                                    style={{ textAlign: "end" }}
                                />
                            </ListItemButton>
                        ))} */}
                    </List>
                </Box>
            </Container>
        </React.Fragment>
    );
}

// function community() {
//     const navigate = useNavigate();
//     const userState = useContext(UserStateContext);
//     const [allPosts, setAllPosts] = useState([]);
//     const [myPosts, setMyPosts] = useState([]);
//     const [checked, setChecked] = useState(false);
//     const [isFetchCompleted, setIsFetchCompleted] = useState(false);

//     const fetchPostsInfo = async () => {
//         try {
//             //   const { data: tempAllPosts } = await Api.get('freeboardlist');
//             //   setAllPosts(tempAllPosts);
//             //   const { data: tempMyPosts } = await Api.get('freeboardlist', userState.user?.id);
//             //   setMyPosts(tempMyPosts);
//             //   setIsFetchCompleted(true);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     //   useEffect(() => {
//     //     if (!userState.user) {
//     //       navigate('/login');
//     //       return;
//     //     }
//     //     fetchPostsInfo();
//     //   }, [userState, navigate]);

//     const toggleCheck = () => {
//         setChecked(!checked);
//     };

//     if (!isFetchCompleted) {
//         return <FreeBoardSkeleton />;
//     }
//     return (
//         <Container style={{ position: "relative", minHeight: "100vh" }}>
//             <Container className="mt-3">
//                 <ToggleButton
//                     className="mb-2"
//                     id="toggle-check"
//                     type="checkbox"
//                     variant="outline-primary"
//                     checked={checked}
//                     onChange={toggleCheck}
//                 >
//                     {checked ? "모든 게시글 보기" : "내가 쓴 게시글 보기"}
//                 </ToggleButton>
//                 <Button
//                     variant="primary"
//                     style={{ position: "absolute", right: 13 }}
//                     onClick={() => navigate(`/freeboard/create`)}
//                 >
//                     게시글 작성
//                 </Button>
//             </Container>
//             <Card className="mt-4">
//                 <Card.Header className="text-center">자유게시판</Card.Header>
//                 <ListGroup   p variant="flush">
//                     {(checked ? myPosts : allPosts).map((post) => (
//                         <ListGroup.Item
//                             key={post._id}
//                             onClick={() => navigate(`/freeboard/${post._id}`)}
//                         >
//                             <Row style={{ cursor: "pointer" }}>
//                                 <Col md={4}>{post.title}</Col>{" "}
//                                 <Col md={{ span: 4, offset: 4 }}>
//                                     {post.name}
//                                 </Col>
//                             </Row>
//                         </ListGroup.Item>
//                     ))}
//                 </ListGroup>
//             </Card>
//         </Container>
//     );
// }

export default community;
