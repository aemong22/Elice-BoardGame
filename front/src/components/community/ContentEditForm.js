import React, { useState } from "react";
import { MyButton, MyButton2 } from "./CommunityStyle";
import { Container, Box, Grid } from "@mui/material";
import WriteForm from "./WriteForm";

import * as Api from "../../api";

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
            setContents((prevState) => {
                return { ...prevState, title, content };
            });
            setIsEditing(false);
        } catch (error) {
            alert("게시글 수정을 실패하였습니다.");
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
                    <MyButton type="submit">편집</MyButton>
                    <MyButton2 onClick={() => setIsEditing(false)}>
                        취소
                    </MyButton2>
                </Grid>
            </form>
        </Box>
    );
}

export default ContentEditForm;
