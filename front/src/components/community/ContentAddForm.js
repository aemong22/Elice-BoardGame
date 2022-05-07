import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Box, Grid } from "@mui/material";
import { MyButton, MyButton2 } from "./CommunityStyle";
import WriteForm from "./WriteForm";
import { toast } from "react-toastify";

import * as Api from "../../api";

function ContentAddForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Api.post("communitycontents/create", {
                title,
                content,
            });
            toast.info("게시글 등록을 성공하였습니다.");
            navigate(`/community`);
        } catch (error) {
            toast.err("게시글 등록에 실패하였습니다.", error);
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: "80px" }}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    marginTop: "70px",
                    textAlign: "center",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <WriteForm
                        title={title}
                        setTitle={setTitle}
                        content={content}
                        setContent={setContent}
                    />
                    <Grid>
                        <MyButton type="submit">등록</MyButton>
                        <MyButton2 onClick={() => navigate(`/community`)}>
                            취소
                        </MyButton2>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default ContentAddForm;
