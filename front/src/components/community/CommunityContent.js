import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Box, Container, CssBaseline, Divider } from "@mui/material/";
import ContentsDetail from "./ContentsDetail";
import ContentEditForm from "./ContentEditForm";
import Comments from "../comment/Comments";
import * as Api from "../../api";

function CommunityContent() {
    const navigate = useNavigate();
    const params = useParams();
    const contentId = params.id;
    const [contents, setContents] = useState(undefined);
    const [isEditable, setIsEditable] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    const userState = useSelector((state) =>
        state ? state.userReducer.user : undefined
    );

    const fetchContentInfo = async (contentId) => {
        try {
            const res = await Api.get("communitycontents", contentId);
            if (res.data?.author === userState?._id) {
                setIsEditable(true);
            } else {
                setIsEditable(false);
            }
            setContents(res.data);
            setIsFetchCompleted(true);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchContentInfo(contentId);
    }, [params]);

    if (!isFetchCompleted) {
        return "loading...";
    }

    const handleDelete = async () => {
        try {
            if (window.confirm("게시글을 삭제하시겠습니까?")) {
                await Api.delete(`communitycontents/${params.id}/delete`);
                navigate("/community");
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
                        <>
                            <ContentsDetail
                                contents={contents}
                                setIsEditing={setIsEditing}
                                isEditable={isEditable}
                                handleDelete={handleDelete}
                            />
                            <Comments
                                comments={contents.comment}
                                contentId={contentId}
                            />
                        </>
                    )}
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default CommunityContent;
