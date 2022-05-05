import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import { UserStateContext } from "../../App";
// import * as Api from '../../api';

function PostEditForm() {
    const navigate = useNavigate();
    const params = useParams();
    const userState = useContext(UserStateContext);
    const [postInfo, setPostInfo] = useState(null);
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    const fetchPostInfo = async (postId) => {
        try {
            //   const { data: postData } = await Api.get('freeboard', postId);
            //   setPostInfo(postData);
            //   setIsFetchCompleted(true);
        } catch (error) {
            console.log(error);
        }
    };

    //   useEffect(() => {
    //     if (!userState.user) {
    //       navigate('/login');
    //       return;
    //     }

    //     fetchPostInfo(params.postId);
    //   }, [params, userState, navigate]);

    const handlePostValue = (name, value) => {
        setPostInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Api.put(`freeboard/${postInfo._id}`, {
                ...postInfo,
            });
            navigate(`/freeboard/${postInfo._id}`);
        } catch (error) {
            console.log(error);
        }
    };

    if (!isFetchCompleted) {
        return "loading...";
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={8}>
                    <Form onSubmit={handleSubmit} className="mt-3">
                        <Form.Group controlId="postAddTitle">
                            <Form.Label>제목</Form.Label>
                            <Form.Control
                                type="text"
                                value={postInfo.title}
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
                                value={postInfo.content}
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
                                    onClick={() =>
                                        navigate(`/freeboard/${postInfo._id}`)
                                    }
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

export default PostEditForm;
