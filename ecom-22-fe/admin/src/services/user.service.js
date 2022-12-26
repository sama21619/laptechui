import { axiosInstance, baseURL } from "~/api/axios.config";

export const UserService = {
  getUsers() {
    return axiosInstance.get(`${baseURL.data}/users`);
  },

  getUser(id) {
    return axiosInstance.get(`${baseURL.data}/api/users?id=${id}`);
  },

  removeUser(id) {
    return axiosInstance.delete(`${baseURL.data}/users/${id}`);
  },

  editUser(id, data) {
    return axiosInstance.patch(`${baseURL.data}/api/users/${id}`, data);
  },

  addUser(data) {
    return axiosInstance.post(`${baseURL.data}/api/users`, data);
  }
};

