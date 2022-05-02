import { Router } from "express";
// 이후에 추가할 것
import { boardServiceController } from "../controllers/boardController";

const boardRouter = Router();

// 전체 content 조회
boardRouter.get("/boardcontents",boardServiceController.findAllContents);

// content 추가하기
boardRouter.post("/boardcontents/create",boardServiceController.createContents);

// 선택 content 조회
boardRouter.get("/boardcontents/:id",boardServiceController.getBoard);

// content 삭제
boardRouter.delete("/boardcontents/:id/delete",boardServiceController.deleteBoard);

// 게시물 수정
// 댓글 넣기
boardRouter.post("/boardcontents/:id/comment",boardServiceController.newComment);

// 댓글 삭제하기

// 댓글 수정하기

export{boardRouter}