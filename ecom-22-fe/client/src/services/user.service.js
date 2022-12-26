import { axiosClient } from '~/api/';

export const userService = {
    getUserById(id) {
        return axiosClient.get(`/users/${id}`);
    },

    editUser(phone, data) {
        return axiosClient.patch(`/users/${phone}`, data);
    },

    postUser(data) {
        return axiosClient.post(`/users/`, data);
    }
};
