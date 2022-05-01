import { BoardContentModel } from "../db/schemas/boardcontents";

class boardService{
    // content 만들기
    static async addContent({author,title,content,comment}){
        const newContent = {author,title,content,comment}

        const createNewContents = await BoardContentModel.create({newContent})
        createNewContents.errorMessage = null;
        
        return createNewContents;
    }

    // 모든 content 보여주기
    static async getContents(){
        const AllContents = await BoardContentModel.find({});
        return AllContents;
    }
    
    // content 삭제하기
    static async deleteContent({contentid}){
        const delContents = await BoardContentModel.findOneAndDelete({id : contentid});
        return delContents;
    }

}

export {boardService}