import { axiosInstance, baseURL } from "~/api/axios.config";

export const orderService = {
	getAllOrder() {
		return axiosInstance.get(`${baseURL.data}/invoices/`);
	},

	updateOrder(id, data) {
		return axiosInstance.patch(`${baseURL.data}/invoices/${id}/status`, data);
	},

	getDetailItem(id){
        return axiosInstance.get(`${baseURL.data}/invoice/${id}/items`);
    }
};



