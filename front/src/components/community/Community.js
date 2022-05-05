import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function community() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
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
