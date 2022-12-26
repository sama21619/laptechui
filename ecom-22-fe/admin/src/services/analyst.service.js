import { axiosInstance, baseURL } from "~/api/axios.config";

class StatisticService {
	getAmountOrder() {
		return axiosInstance.get(`${baseURL.data}/statistic/order`);
	}
	getAmountProduct() {
		return axiosInstance.get(`${baseURL.data}/statistic/product`);
	}
	getAmountCustomer() {
		return axiosInstance.get(`${baseURL.data}/statistic/customer`);
	}
	getAmountRevenue() {
		return axiosInstance.get(`${baseURL.data}/statistic/revenue`);
	}
	getAmountSixMonth() {
		return axiosInstance.get(`${baseURL.data}/statistic/six_month`);
	}
	getProfit() {
		return axiosInstance.get(`${baseURL.data}/statistic/profit`);
	}
	getCancelBill() {
		return axiosInstance.get(`${baseURL.data}/statistic/cancel_bill`);
	}
	getOrderedBill() {
		return axiosInstance.get(`${baseURL.data}/statistic/ordered_bill`);
	}
	getPaidBill() {
		return axiosInstance.get(`${baseURL.data}/statistic/paid_bill`);
	}
	getRecentTracsaction() {
		return axiosInstance.get(`${baseURL.data}/statistic/recent_transaction`);
	}
}

export default new StatisticService();
