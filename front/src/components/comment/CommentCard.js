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
import Confirm from "../Confirm";
import * as Api from "../../api";

function CommentCard({ userName, userId, content, commentId, contentId }) {
    const navigate = useNavigate();
    const [isEditable, setIsEditable] = useState(false);
    const [open, setOpen] = useState(false);
    const confirmTitle = "댓글을 삭제하실 건가요?";
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            await Api.delete(
                `communitycontents/${contentId}/comment/${commentId}`
            );
            navigate(`/communitycontents/${contentId}`);
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
                            <IconButton onClick={handleClickOpen}>
                                <DeleteIcon />
                            </IconButton>
                            <Confirm
                                open={open}
                                handleClose={handleClose}
                                handleDelete={handleDelete}
                                title={confirmTitle}
                            />
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
