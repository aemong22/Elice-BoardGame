import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import { UserStateContext } from "../../App";
// import * as Api from '../../api';

function ContentEditForm() {
    const navigate = useNavigate();
    const params = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleEdit = async (e) => {
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

export default ContentEditForm;
