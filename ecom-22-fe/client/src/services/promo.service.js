import { axiosClient } from '~/api';

export const promoService = {
    getPromo(id) {
        return axiosClient.get(`/banners`);
    },
};
