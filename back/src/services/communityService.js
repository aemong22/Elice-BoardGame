import { CommunityContentModel } from "../db/schemas/communitycontents";
import { CommunityCommentModel } from "../db/schemas/communitycomment";
import { UserModel } from "../db/schemas/user";

class communityService {
    // content 만들기
    static async addContent({ userId, title, content }) {
        const author = await UserModel.findOne({ _id: userId });
        const comment = [];
        const newContent = {
            author: author.user_name,
            title,
            content,
            comment,
        };

        const createNewContents = await CommunityContentModel.create(
            newContent
        );
        createNewContents.errorMessage = null;

        return createNewContents;
    }

    // content수정하기
    static async updateContent({ id, update }) {
        const filter = { _id: id };
        const option = { returnOriginal: false };
        const fieldUpdate = "title";
        const updatetitle = update.title;
        let updates = { [fieldUpdate]: updatetitle };
        let UpdateContents = await CommunityContentModel.findOneAndUpdate(
            filter,
            updates,
            option
        );

        const fieldUpdates = "content";
        const updatecontent = update.content;
        updates = { [fieldUpdates]: updatecontent };
        UpdateContents = await CommunityContentModel.findOneAndUpdate(
            filter,
            updates,
            option
        );

        UpdateContents.errorMessage = null;
        return UpdateContents;
    }

    // 모든 content 보여주기
    static async getContents() {
        const AllContents = await CommunityContentModel.find({}).sort({
            createdAt: -1,
        });
        return AllContents;
    }

    static async getContent({ contentid }) {
        const getContent = await CommunityContentModel.findOne({
            _id: contentid,
        }).populate({
            path: "comment",
            populate: {
                path: "user_id",
            },
        });

        return getContent;
    }

    // content 삭제하기
    static async deleteContent({ contentid }) {
        const getContent = await CommunityContentModel.findOneAndDelete({
            _id: contentid,
        });
        return getContent;
    }

    // comment 추가하기
    static async addComment({ id, user_id, content }) {
        const newComment = { user_id, content };
        const CommunityComment = await CommunityCommentModel.create(newComment);
        const createNewComment = await CommunityContentModel.updateOne(
            { _id: id },
            { $push: { comment: CommunityComment } }
        );
        createNewComment.errorMessage = null;

        return createNewComment;
    }

    // comment 삭제하기
    static async deleteComment({ cotentId, commentId }) {
        const delComment = await CommunityCommentModel.findByIdAndDelete({
            _id: commentId,
        });
        const delContent = await CommunityContentModel.findOneAndUpdate(
            { _id: cotentId },
            { $pull: { comment: commentId } }
        );
    }

    // comment 수정하기
    static async updateComment({ commentId, content }) {
        const filter = { _id: commentId };
        const option = { returnOriginal: false };
        const updates = { content: content };
        const UpdateComment = await CommunityCommentModel.findOneAndUpdate(
            filter,
            updates,
            option
        );
        UpdateComment.errorMessage = null;
        return UpdateComment;
    }
}

export { communityService };
