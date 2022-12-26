import { axiosInstance, baseURL } from "~/api/axios.config";

export const CommentService = {
  getComments() {
    return axiosInstance.get(`${baseURL.data}/new-comments/`);
  },

  getCommentByProductId(id) {
    return axiosInstance.get(`${baseURL.data}/products/${id}/comments`);
  },
 
  removeComment(id) {
    return axiosInstance.delete(`${baseURL.data}/comments/${id}`);
  },
  
  postComment(data){
    return axiosInstance.post(`${baseURL.data}/comments/`,data);
  }
};

