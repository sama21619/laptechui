import { createSlice } from '@reduxjs/toolkit';

export const products = createSlice({
    name: 'products',
    initialState: {
        allProducts: {
            data: [],
        },
        oneProduct: {
            data: '',
        },
        filter: {
            data: [],
        },
        location: {
            data: [],
        },
        productDetail: {
            data: {},
        },
        productBestDetail: {
            data: {},
        },
        productImage: {
            data: [],
        }
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.allProducts.data = action.payload;
        },
        updateAllProduct: (state, action) => {
            state.allProducts.data = action.payload;
        },
        getOneProduct: (state, action) => {
            state.oneProduct.data = action.payload;
        },
        handleFilter: (state, action) => {
            state.filter.data = action.payload;
        },
        getLocationProduct: (state, action) => {
            state.location.data = action.payload;
        },
        getProductDetail: (state, action) => {
            state.productDetail.data = action.payload;
        },
        getProductBestDetail: (state, action) => {
            state.productBestDetail.data = action.payload;
        },
        getProductImage: (state, action) => {
            state.productImage.data = action.payload;
        },
        updateDiscussRating: (state, action) => {
            const rating = state.productDetail.data.rating.find((rating) => rating.id === action.payload.idRating);
            if (rating) {
                const res = rating.discuss.push(action.payload);
            }
        },
        
    },
});
export const {
    updateDiscussRating,
    getAllProducts,
    getOneProduct,
    handleFilter,
    getLocationProduct,
    getProductDetail,
    getProductBestDetail,
    updateAllProduct,
    getProductImage,
} = products.actions;

export default products.reducer;
