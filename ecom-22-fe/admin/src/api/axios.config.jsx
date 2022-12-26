import axios from "axios";


const baseURL = {
	auth: "http://localhost:8088/api/v1",
	data: "http://localhost:8088/api/v1",
};

export const baseURL_ = {
	auth: "http://localhost:8088",
	data: "http://localhost:8088/api/v1",
};

const axiosInstance = axios.create({
	headers: {
		"content-type": "application/json",
	},
	//withCredentials: true,
});

axiosInstance.interceptors.request.use(
	function (req) {
		const token = JSON.parse(localStorage.getItem("token"));
		if (token) req.headers.Authorization = `Bearer ${token}`;
		return req;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export { axiosInstance, baseURL };
