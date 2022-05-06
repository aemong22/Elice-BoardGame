import React, { useState, useEffect } from "react";
import { Card, CardHeader } from "@mui/material";
import CommentCard from "./CommentCard";
import CommentAddForm from "./CommentAddForm";

function Comments({ comments, contentId }) {
    return (
        <>
            <Card sx={{ width: "100%" }}>
                <CardHeader title="댓글" />
                <CommentAddForm contentId={contentId} />
                {comments?.map((comment) => (
                    <CommentCard
                        userName={comment.user_id.user_name}
                        userId={comment.user_id._id}
                        content={comment.content}
                        contentId={contentId}
                        key={comment._id}
                        commentId={comment._id}
                    />
                ))}
            </Card>
        </>
    );
}

export default Comments;
