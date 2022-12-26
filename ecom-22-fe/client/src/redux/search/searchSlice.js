import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: {
            data: [],
        },
    },
    reducers: {
        getResultSearch: (state, action) => {
            state.search.data = action.payload;
        },
       
    },
});

export const { getResultSearch} = searchSlice.actions;

export default searchSlice.reducer;
