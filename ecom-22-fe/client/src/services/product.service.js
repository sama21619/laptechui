import { axiosClient } from '~/api';

export const productService = {
  

    getAllProducts() {
        return axiosClient.get(`/products/`);
    },


    getProductById(id) {
        return axiosClient.get(`/products/${id}`);
    },
    getProductImageById(id) {
        return axiosClient.get(`/products/${id}/images`);

    },
    getProductDetailById(id) {
        return axiosClient.get(`/products/${id}/details`);
    },
    
    getProductCards() {
        return axiosClient.get(`/products/cards`);
    },
    getProductCardsById(id) {
        return axiosClient.get(`/products/${id}/cards`);
    },




};
