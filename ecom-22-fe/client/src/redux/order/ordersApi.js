import { postOrder } from './orderSlice';
import { orderService } from '~/services/order.service';

export const postOrders = async (dispatch, data) => {
    let res = await orderService.postOrder(data);
    dispatch(postOrder(data));
};

