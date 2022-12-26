import { configureStore } from '@reduxjs/toolkit';

import productModalReducer from './product-modal/productModalSlice';

import cartItemsReducer from './shopping-cart/cartItemsSlide';
import userReducer from './user/userSlice';
import comments from './comment/commentsSlice';
import feedbacks from './feedback/feedbacksSlice';
import products from './product/productsSlice';
import searchSlice from './search/searchSlice';
import historyOrdersSlice from './history/historyOrdersSlice';
import orderSlice from './order/orderSlice';
//khoi tao store
export const store = configureStore({
    reducer: {
        productModal: productModalReducer,
        cartItems: cartItemsReducer,
        user: userReducer,
        comments: comments,
        feedbacks: feedbacks,
        products: products,
        search: searchSlice,
        historyOrders: historyOrdersSlice,
        order: orderSlice,
    },
});
