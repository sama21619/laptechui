import { axiosClient } from '~/api';

export const searchService = {
    getResultSearchApi(value) {
        return axiosClient.get(`/products/cards/?name=${value}`);
    },
};
