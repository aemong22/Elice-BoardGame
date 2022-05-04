import { Router } from "express";
// 이후에 추가할 것
import { communityServiceController } from "../controllers/communityController";
// refresh는 남겨두기
import { refresh } from "../utils/refresh";
import { authJWT } from "../middlewares/authJWT";
const communityRouter = Router();

// 전체 content 조회
communityRouter.get("/communitycontents",authJWT,communityServiceController.findAllContents);

// content 추가하기
communityRouter.post("/communitycontents/create",authJWT,communityServiceController.createContents);

// 선택 content 조회
communityRouter.get("/communitycontents/:id",authJWT,communityServiceController.getCommunity);

// content 삭제
communityRouter.delete("/communitycontents/:id/delete",authJWT,communityServiceController.deleteCommunity);

// content 수정하기
communityRouter.put("/communitycontent/:id",authJWT,communityServiceController.updateContent);
// 게시물 수정

// 댓글 넣기
communityRouter.post("/communitycontents/:id/comment",authJWT,communityServiceController.newComment);

// 댓글 삭제하기
communityRouter.delete("/communitycontents/:id/comment/:id2",authJWT,communityServiceController.deleteComment);

// 댓글 수정하기
communityRouter.put("/communitycontents/:id/comment/:id2/put",authJWT,communityServiceController.updateComment);


// 댓글 수정하기

export{communityRouter}