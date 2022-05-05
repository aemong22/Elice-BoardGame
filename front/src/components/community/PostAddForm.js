import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Button, Form, Col, Row } from "react-bootstrap";

// import * as Api from '../../api';
import { UserStateContext } from "../../App";

function PostAddForm() {
    const navigate = useNavigate();
    const [tempPost, setTempPost] = useState({ title: "", content: "" });
    const userState = useContext(UserStateContext);

    useEffect(() => {
        // 만약 전역 상태의 user가 null이라면, 로그인 페이지로 이동함.
        if (!userState.user) {
            navigate("/login");
            return;
        }
    }, [userState, navigate]);

    const handlePostValue = (name, value) => {
        setTempPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (window.confirm("게시글을 등록 하겠습니까?")) {
                // await Api.post('freeboard/create', {
                //   ...tempPost,
                //   user_id: userState.user.id,
                //   name: userState.user.name,
                // });
                // navigate(`/freeboard`);
            }
        } catch (error) {
            alert("게시글 등록에 실패하였습니다.", error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Form onSubmit={handleSubmit} className="mt-3">
                        <Form.Group controlId="postAddTitle">
                            <Form.Label>제목</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="제목을 입력하세요"
                                value={tempPost.title}
                                onChange={(e) =>
                                    handlePostValue("title", e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group controlId="postAddContext">
                            <Form.Label>내용</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={20}
                                placeholder="내용을 입력하세요"
                                value={tempPost.content}
                                onChange={(e) =>
                                    handlePostValue("content", e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group as={Row} className="mt-3 text-center">
                            <Col>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="me-2"
                                >
                                    등록
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => navigate(`/freeboard`)}
                                >
                                    취소
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default PostAddForm;
