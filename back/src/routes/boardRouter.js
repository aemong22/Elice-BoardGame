import { Router } from "express";
// 이후에 추가할 것
import { boardServiceController } from "../controllers/boardController";

const boardRouter = Router();

// 전체 content 조회
boardRouter.get("/boardcontents",boardServiceController.findAllContents);

// 선택 content 조회
boardRouter.get("/boardcontents/:id",boardServiceController);

// content 삭제
boardRouter.delete("/boardcontents/:id/delete",boardServiceController);
