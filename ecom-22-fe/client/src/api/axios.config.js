import axios from 'axios';


export const apiProduction = 'http://localhost:8088/api/v1';
export const apiDev = 'http://localhost:8088/api/v1';



const baseURL = import.meta.env.MODE === 'production' ? apiProduction : apiDev;

const axiosClient = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    function (req) {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) req.headers['auth-token'] = token;
        return req;
    },

    function (error) {
        return Promise.reject(error);
    },
);
axiosClient.interceptors.response.use(
    function (res) {
        return res.data;
    },

    function (error) {
        return Promise.reject(error);
    },
);
export default axiosClient;
