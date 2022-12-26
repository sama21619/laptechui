import { getComment, postComment } from './commentsSlice';
import { commentService } from '~/services';

export const getComments = async (dispatch, id) => {
    let res = await commentService.getCommentByProductId(id);
    
   
    dispatch(getComment(res));
};
export const postComments = async (dispatch, data) => {
    let res = await commentService.postComment(data);
    dispatch(postComment(res));
};
