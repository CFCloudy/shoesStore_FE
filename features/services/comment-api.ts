import axiosClient from "./axios-client";


class CommentApi {
    postComment(payload: any) {
        return axiosClient({
            method: 'post',
            data: payload,
            url: `/api/Comment`,
        })
    }

    getComment(id: number) {
        return axiosClient({
            method: "get",
            url: `/api/Comment?id=${id}`,
            data: id,
        });
    }
    reactionComment(payload: any) {
        return axiosClient({
            url: `/api/Comment`,
            method: 'put',
            params: payload
        })
    }
    deleteComment(payload: any) {
        return axiosClient({
            url: `/api/Comment`,
            method: 'delete',
            params: payload
        })
    }
}


export default new CommentApi();



export type ITypePostComment = {
    content: string,
    shoesId: number,
    userId: number,
    parentId: null
}