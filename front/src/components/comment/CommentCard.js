import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import * as Api from "../../api";

function CommentCard({ userName, userId, content, commentId, contentId }) {
    const navigate = useNavigate();
    const [isEditable, setIsEditable] = useState(false);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);
    const userState = useSelector((state) =>
        state ? state.userReducer.user : undefined
    );

    useEffect(() => {
        if (userId === userState?._id) {
            setIsEditable(true);
        } else {
            setIsEditable(false);
        }
    }, []);

    const handleDelete = async () => {
        try {
            if (window.confirm("게시글을 삭제하시겠습니까?")) {
                await Api.delete(
                    `communitycontents/${contentId}/comment/${commentId}`
                );
                navigate(`/communitycontents/${contentId}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                action={
                    isEditable && (
                        <>
                            <IconButton onClick={handleDelete}>
                                <DeleteIcon />
                            </IconButton>
                        </>
                    )
                }
                title={userName}
            />
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CommentCard;
