import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import * as Api from "../../api";

function CommentAddForm({ contentId }) {
    const navigate = useNavigate();
    const [comment, setComment] = useState("");

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            await Api.post(`communitycontents/${contentId}/comment`, {
                content: comment,
            });
            navigate(`/communitycontents/${contentId}`);
            setComment("");
        } catch (error) {
            toast.error("댓글 생성에 실패하였습니다.");
            console.log(error);
        }
    };
    return (
        <form onSubmit={handlePost}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                    sx={{ m: "1% 0 1% 1%", width: "100%" }}
                    label="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button sx={{ m: "1%" }} type="submit" color="neutral">
                    완료
                </Button>
            </div>
        </form>
    );
}

export default CommentAddForm;
