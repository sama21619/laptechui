import { axiosClient } from '~/api';

export const customerService = {
    getCustomerByPhone(number) {
        return axiosClient.get(`/users/login?phoneNumber=${number}`);
    },
    postCustomer(data) {
        return axiosClient.post(`/customers`, data);
    },
    getCustomerById(id) {
        return axiosClient.get(`/users/${id}`);
    },
    updateCustomerById(id, data) {
        return axiosClient.put(`/users/${id}`, data);
    }

};
