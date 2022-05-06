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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function CommentCard({ userName, userId, content, setIsEditing }) {
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

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                action={
                    isEditable && (
                        <>
                            <IconButton
                                onClick={() => setIsEditing(true)}
                                sx={{ marginLeft: "auto" }}
                            >
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete()}>
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
