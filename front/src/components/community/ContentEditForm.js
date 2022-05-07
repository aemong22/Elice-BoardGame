import React, { useState } from "react";
import { MyButton, MyButton2 } from "./CommunityStyle";
import { Box, Grid } from "@mui/material";
import WriteForm from "./WriteForm";

import * as Api from "../../api";
import { toast } from "react-toastify";

function ContentEditForm({ contents, setContents, setIsEditing, contentId }) {
    console.log(contents);

    const [title, setTitle] = useState(contents.title);
    const [content, setContent] = useState(contents.content);

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await Api.put(`communitycontent/${contentId}`, {
                title,
                content,
            });
            toast.info("게시글을 수정하였습니다.");
            setContents((prevState) => {
                return { ...prevState, title, content };
            });
            setIsEditing(false);
        } catch (error) {
            toast.error("게시글 수정을 실패하였습니다.");
            console.log(error);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                marginTop: "70px",
                textAlign: "center",
            }}
        >
            <form onSubmit={handleEdit}>
                <WriteForm
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                />
                <Grid>
                    <MyButton type="submit">수정 완료</MyButton>
                    <MyButton2 onClick={() => setIsEditing(false)}>
                        취소
                    </MyButton2>
                </Grid>
            </form>
        </Box>
    );
}

export default ContentEditForm;
