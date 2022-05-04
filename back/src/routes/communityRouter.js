import { Router } from "express";
// 이후에 추가할 것
import { communityServiceController } from "../controllers/communityController";

const communityRouter = Router();

// 전체 content 조회
communityRouter.get("/communitycontents",communityServiceController.findAllContents);

// content 추가하기
communityRouter.post("/communitycontents/create",communityServiceController.createContents);

// 선택 content 조회
communityRouter.get("/communitycontents/:id",communityServiceController.getCommunity);

// content 삭제
communityRouter.delete("/communitycontents/:id/delete",communityServiceController.deleteCommunity);

// content 수정하기
communityRouter.put("/communitycontent/:id",communityServiceController.updateContent);
// 게시물 수정

// 댓글 넣기
communityRouter.post("/communitycontents/:id/comment",communityServiceController.newComment);

// 댓글 삭제하기
communityRouter.delete("/communitycontents/:id/comment/:id2",communityServiceController.deleteComment);

// 댓글 수정하기
communityRouter.put("/communitycontents/:id/comment/:id2/put",communityServiceController.updateComment);


// 댓글 수정하기

export{communityRouter}