import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Button from "@mui/material/Button";

function CommentEdidtForm({ handlePost, contentId }) {
    const [comment, setComment] = useState("");

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            await Api.post(`communitycontents/${contentId}}/comment`, {
                content: comment,
            });
            navigate(`/communitycontent/${contentId}`);
        } catch (error) {
            alert("댓글 생성에 실패하였습니다.");
            console.log(error);
        }
    };
    return (
        <form onSubmit={handlePost}>
            <TextField
                helperText="Please enter your comment"
                id="demo-helper-text-aligned"
                label="Comment"
                value={comment}
                onChange={() => setComment(comment)}
            />
            <Button type="submit">완료</Button>
            <Button onClick={() => navigate(`/communitycontent/${contentId}`)}>
                취소
            </Button>
        </form>
    );
}

export default CommentEdidtForm;
