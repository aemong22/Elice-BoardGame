import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyButton, MyButton2 } from "./CommunityStyle";

import * as Api from "../../api";

function ContentEditForm() {
    const navigate = useNavigate();
    const params = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await Api.put(`communitycontent/${id}`, {
                ...postInfo,
            });
            navigate(`/communitycontent/${id}`);
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
                    <MyButton2 onClick={() => navigate(`/community`)}>
                        취소
                    </MyButton2>
                </Grid>
            </form>
        </Box>
    );
}

export default ContentEditForm;
