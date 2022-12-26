import { axiosInstance, baseURL } from "~/api/axios.config";

class ProductService {
  getProducts() {
    return axiosInstance.get(`${baseURL.data}/products/cards`);
  }

  postImage(data){
    return axiosInstance.post(`${baseURL.data}/images/`, data);
  }

  getProductById(id) {
    return axiosInstance.get(`${baseURL.data}/products/${id}`);
  }
  getProductImageById(id) {
    return axiosInstance.get(`${baseURL.data}/products/${id}/images`);
  }
  uploadImage(file) {
    
    return axiosInstance.post(`${baseURL.data}/uploads/`, file);
    

  }
  

  updateProductById(id, data){
    return axiosInstance.put(`${baseURL.data}/products/${id}`, data);
  }

  addProduct(data){
    return axiosInstance.post(`${baseURL.data}/products/`, data);
  }

  deleteProductById(id){
    return axiosInstance.delete(`${baseURL.data}/products/${id}`);
  }
  

 
}

export default new ProductService();
