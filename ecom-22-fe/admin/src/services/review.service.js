import { axiosInstance, baseURL } from "~/api/axios.config";

export const ReviewService = {
  getReviews() {
    return axiosInstance.get(`${baseURL.data}/new-feedbacks?limit=10`);
  },
  deleteReview(id){
    return axiosInstance.get(`${baseURL.data}/feedbacks/${id}`);

  }
 
};

