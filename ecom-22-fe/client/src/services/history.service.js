import { axiosClient } from '~/api';

export const historyService = {
    

    updateHistoryOrder(id, data) {
        return axiosClient.patch(`/invoices/${id}/status`, data);
    },

    getHistoryOrderByUserId(id){
        return axiosClient.get(`/users/${id}/invoices`);
    },

    getDetailItem(id){
        return axiosClient.get(`/invoice/${id}/items`);
    }
};
