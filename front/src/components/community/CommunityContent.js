import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Box, Container, CssBaseline, Divider } from "@mui/material/";
import ContentsDetail from "./ContentsDetail";
import ContentEditForm from "./ContentEditForm";
// import * as Api from "../../api";

function CommunityContent() {
    const navigate = useNavigate();
    const params = useParams();
    const [content, setContent] = useState(undefined);
    const [isEditable, setIsEditable] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    const userState = useSelector((state) =>
        state ? state.userReducer.user : undefined
    );

    const fetchContentInfo = async (contentId) => {
        try {
            const res = await Api.get("communitycontents", contentId);
            if (res.data?.author === userState?.user_name) {
                setIsEditable(true);
            } else {
                setIsEditable(false);
            }
            setContent(res.data);
            setIsFetchCompleted(true);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchContentInfo(params.postId);
    }, [params]);

    if (!isFetchCompleted) {
        return "loading...";
    }

    const deleteNavigate = async () => {
        try {
            if (window.confirm("게시글을 삭제하시겠습니까?")) {
                await Api.delete(`communitycontents/${params.id}/delete`);
                navigate(`/freeboard`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Box
                    sx={{
                        width: "100%",
                        height: "100vh",
                        marginTop: "60px",
                        backgroundColor: "gray",
                    }}
                >
                    <Divider />
                    {isEditing ? (
                        <ContentEditForm />
                    ) : (
                        <ContentsDetail
                            setIsEditable={setIsEditable}
                            setIsEditing={setIsEditing}
                            isEditable={isEditable}
                            isEditing={isEditing}
                        />
                    )}
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default CommunityContent;

// import React, { useContext, useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Container, Button, Card, Col, Row } from "react-bootstrap";
// import moment from "moment";

// import { UserStateContext } from "../../App";
// // import * as Api from '../../api';

// import Comments from "../comment/Comments";

// function PostContents() {
//     const navigate = useNavigate();
//     const params = useParams();
//     const userState = useContext(UserStateContext);
//     const [postInfo, setPostInfo] = useState(null);
//     const [isFetchCompleted, setIsFetchCompleted] = useState(false);
//     const [isEditable, setIsEditable] = useState(false);

//     const fetchPostInfo = async (postId) => {
//         try {
//             //   const { data: postData } = await Api.get('freeboard', postId);
//             //   if (postData?.user_id === userState.user?.id) {
//             //     setIsEditable(true);
//             //   } else {
//             //     setIsEditable(false);
//             //   }
//             //   setPostInfo(postData);
//             //   setIsFetchCompleted(true);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     //   useEffect(() => {
//     //     // 만약 전역 상태의 user가 null이라면, 로그인 페이지로 이동함.
//     //     if (!userState.user) {
//     //       navigate('/login');
//     //       return;
//     //     }

//     //     fetchPostInfo(params.postId);
//     //   }, [params, userState, navigate]);

//     if (!isFetchCompleted) {
//         return "loading...";
//     }

//     const deleteNavigate = async () => {
//         try {
//             if (window.confirm("게시글을 삭제하시겠습니까?")) {
//                 await Api.delete("freeboard", params.postId);
//                 navigate(`/freeboard`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     //
//     return (
//         <Container style={{ minHeight: "100vh" }}>
//             <Card className="mb-3 justify-content-md-center">
//                 <Card.Header>
//                     <Card.Title className="mb-3">{postInfo.title}</Card.Title>
//                     <Card.Subtitle className="text-muted mb-3">
//                         작성자 : {postInfo.name}
//                     </Card.Subtitle>
//                     <Card.Subtitle className="text-muted mb-2">
//                         {moment(postInfo.updatedAt).format(
//                             "YYYY-MM-DD HH:mm:ss"
//                         )}
//                     </Card.Subtitle>
//                 </Card.Header>
//                 <Card.Body className="mt-3 mb-3">
//                     {postInfo.content?.split("\n")?.map((line, index) => (
//                         <Card.Text key={index}>
//                             {line}
//                             <br />
//                         </Card.Text>
//                     ))}
//                 </Card.Body>
//                 <Card.Footer className="text-center">
//                     <Button
//                         variant="outline-primary"
//                         className="me-2"
//                         onClick={() => navigate(`/freeboard`)}
//                     >
//                         목록
//                     </Button>
//                     {isEditable && (
//                         <Button
//                             variant="primary"
//                             className="me-2"
//                             onClick={() =>
//                                 navigate(`/freeboard/edit/${postInfo._id}`)
//                             }
//                         >
//                             수정
//                         </Button>
//                     )}
//                     {isEditable && (
//                         <Button
//                             variant="danger"
//                             className="me-2"
//                             onClick={() => deleteNavigate()}
//                         >
//                             삭제
//                         </Button>
//                     )}
//                 </Card.Footer>
//             </Card>
//             <Comments
//                 cur_user_id={userState.user.id}
//                 cur_user_name={userState.user.name}
//                 board_id={postInfo._id}
//             />
//         </Container>
//     );
// }

// export default PostContents;
